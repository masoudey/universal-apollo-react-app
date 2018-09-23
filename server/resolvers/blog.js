import { combineResolvers } from "graphql-resolvers";

import { isAuthenticated, isPostOwner } from "./authorization";

const toCursorHash = string => Buffer.from(string).toString('base64');

const fromCursorHash = string =>
    Buffer.from(string, 'base64').toString('ascii');

export default {
    Query: {
        posts: async (parent, { cursor, limit = 100 }, { models }) => {
            const cursorOptions = cursor
                ? {createdAt: {$lte: fromCursorHash(cursor)}}
                : {};
            
                const posts = await models.Post.find(
                    cursorOptions,
                    null,
                    {sort: { createdAt: 'desc'}, limit: limit + 1}
                );

                const hasNextPage = posts.length > limit;
                const edges = hasNextPage ? posts.slice(0, -1) : posts;

                return {
                    edges,
                    pageInfo: {
                        endCursor: toCursorHash(
                            edges[edges.length - 1].createdAt.toString(),
                        ),
                    },
                };
        },
        post: async (parent, { id }, { models }) => 
            await models.Post.findById(id),
    },

    Mutation: {
        
    }
}