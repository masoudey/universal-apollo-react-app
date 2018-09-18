import jwt from "jsonwebtoken";
import { combineResolvers } from "graphql-resolvers";
import { AuthenticationError, UserInputError } from "apollo-server";

import { isAuthenticated, isAdmin } from "./authorization";

const createToken = async (user, secret, expiresIn) => {
    const { id, email, username, role } = user;
    return await jwt.sign({id, email, username, role }, secret, {expiresIn,});
};

export default {
    Query: {
        users: async (parent, args, { models }) =>
            await models.User.find(),

        user: async (parent, { id }, { models }) =>
            await models.User.findOne(id),

        me: async (parent, args, { models, me }) => {
            if (!me) {
                return null;
            }

            return await models.User.findOne(me.id)
        },
    },
    Mutation: {
        signUp: async (
            parent,
            { username, email, password, firstName, 
                lastName,
                profileImage },
            { models, secret },
        ) => {
            const user = await models.User.findOne({ email, username});

            if (user) {
                throw new UserInputError('User Exist');
            }

            const newUser = await models.User({
                username,
                email,
                password,
                firstName, 
                lastName,
                profileImage,
            }).save();
            return { token: createToken(newUser, secret, '30m')};
        },

        signIn: async (
            parents,
            { login, password },
            { models, secret },
        ) => {
            
        }
    },
}