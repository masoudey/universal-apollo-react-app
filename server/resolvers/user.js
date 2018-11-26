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

const generatePasswordHash = async function(password) {
    const saltRound = 10;
    return await bcrypt.hashSync(password, saltRound);    
}

const validatePassword = async function(password, userPassword) {
    return await bcrypt.compare(password, userPassword);
}

export default {
    Query: {
        users: async (parent, args, { models }) => {
            console.log("users");
            return await models.User.find();
        },

        user: async (parent, { id }, { models }) =>
            await models.User.findById(id),

        currentUser: async (parent, args, { models, currentUser }) => {
            console.log(currentUser);
            if (!currentUser) {
                return null;
            }
            const usr = await models.User.findById(currentUser.id);
            console.log("usr", usr);
            return usr;
        },
    },
    Mutation: {
        signUp: async (
            parent,
            { username, email, password, firstName, lastName, userImage },
            { models, secret },
        ) => {
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
            return { 
                token: createToken(newUser, secret, '30m'),
                newUser,
            };
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

            const isValidPass = await validatePassword(password, user.password)
            if (!isValidPass) {
                throw new AuthenticationError('Invalid password');
            }

            return {
                token: createToken(user, secret, '30m'),
                user,
            }
        },
        updateUser: combineResolvers(
            isAuthenticated,
            async (parent, { email, username, firstName, lastName}, { models, currentUser }) => {
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
        setUserImage: async (parent, { email, userImage}, { models, currentUser}) => {
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