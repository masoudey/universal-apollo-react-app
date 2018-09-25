import jwt from "jsonwebtoken";
import generator from "generate-password";
import axios from "axios";
import { combineResolvers } from "graphql-resolvers";
import { AuthenticationError, UserInputError } from "apollo-server";

import webConfig from "../../webConfig";
import { isAuthenticated, isAdmin } from "./authorization";

import bcrypt from "bcrypt";

const createToken = async (user, secret, expiresIn) => {
    const { id, email, username, role } = user;
    return await jwt.sign({id, email, username, role }, secret, {expiresIn,});
};

const generatePasswordHash = async function() {
    const saltRound = 10;
    return await bcrypt.hashSync(this.password, saltRound);    
}

const validatePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

export default {
    Query: {
        users: async (parent, args, { models }) =>
            await models.User.find(),

        user: async (parent, { id }, { models }) =>
            await models.User.findById(id),

        me: async (parent, args, { models, me }) => {
            if (!me) {
                return null;
            }

            return await models.User.findById(me.id)
        },
    },
    Mutation: {
        signUp: async (
            parent,
            { username, email, password, firstName, lastName, userImage },
            { models, secret },
        ) => {
            console.log("models", models.User);
            const user = await models.User.findOne({ email });

            if (user) {
                throw new UserInputError('User Exist');
            }

            const newUser = await new models.User({
                username,
                email,
                password,
                firstName, 
                lastName,
                userImage,
            }).save();
            return { token: createToken(newUser, secret, '30m')};
        },

        signIn: async (
            parents,
            { email, password },
            { models, secret },
        ) => {
            const user = await models.User.findOne({ email });

            if (!user) {
                throw new UserInputError('User doesnt exist');
            }

            const isValidPass = await validatePassword(password)
            if (!isValidPass) {
                throw new AuthenticationError('Invalid password');
            }

            return {token: createToken(user, secret, '30m')}
        },
        updateUser: combineResolvers(
            isAuthenticated,
            async (parent, { email, username, firstName, lastName}, { models, me }) => {
                const user = await models.User.findOneAndUpdate({ email }, { $set: {username, firstName, lastName}}, {new: true});

                if (!user) {
                    throw new UserInputError('User not found');
                }

                return user;
            },
        ),
        deleteUser: combineResolvers(
            isAdmin,
            async (parent, { id }, { models }) =>
                await models.User.findByIdAndDelete({id})
        ),
        setUserImage: async (parent, { email, userImage}, { models, me}) => {
            const user = await models.User.findOneAndUpdate({ email }, {$set: { userImage }}, {new: true});

            if (!user) {
                throw new UserInputError('User not found');
            }

            return user;
        },
        changeEmail: async (parent, { currentEmail, newEmail }, { models }) => {
            const user = await models.User.findOneAndUpdate({ email: currentEmail }, {$set: {email: newEmail}}, {new: true});

            if(!user) {
                throw new UserInputError('User not found');
            }

            return user;
        },
        changePassword: async (parent, { email, password }, { models }) => {
            const hashPassword = await generatePasswordHash(password);
            const user = await models.User.findOneAndUpdate({ email }, {$set: { password: hashPassword}}, {new: true});

            if (!user) {
                throw new UserInputError('User not found');
            }

            return user;
        },
        passwordReset: async (parent, { email }, { models }) => {
            const generatedPassword = generator.generate({ length: 10, numbers: true});
            const hashPassword = await generatePasswordHash(generatedPassword);
            const user = await models.User.findOneAndUpdate({ email }, {$set: { password: hashPassword}}, {new: true});

            if (!user) {
                throw new UserInputError('User not found');
            } else {
                const data = {
                    email,
                    generatedPassword
                }

                axios.post(`${webConfig.siteURL}/password-reset`, data)
                .then((response)=>{
                    console.log('Email has sent!');
                })
                .catch((err) => {
                    console.log(err)
                })
            }

            return user;
        }
    },
    User: {
        posts: async (user, args, { models }) =>
            await models.Post.find({ userId: user.id })
    }
}