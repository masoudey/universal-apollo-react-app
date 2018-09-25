import { combineResolvers } from "graphql-resolvers";

import { isAuthenticated, isPostOwner } from "./authorization";

import pubsub, { EVENTS } from "../subscription";

const toCursorHash = string => Buffer.from(string).toString('base64');

const fromCursorHash = string =>
    Buffer.from(string, 'base64').toString('ascii');

export default {
    Query: {
        posts: async (parent, { cursor, limit = 50 }, { models }) => {
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
        createPost: combineResolvers(
            isAuthenticated,
            async (parent, { title, desc, content, cotagory, img }, { models, me }) => {
                const post = await new models.Post({
                    title,
                    desc,
                    content,
                    cotagory,
                    img,
                    userId: me.id,
                }).save();

                pubsub.publish(EVENTS.POST.CREATED, {
                    postCreated: { post },
                });

                return post;
            },
        ),

        deletePost: combineResolvers(
            isAuthenticated,
            isPostOwner,
            async (parent, { id }, { models }) =>
                await models.Post.findByIdAndDelete({ id }),
        ),
    },

    Post: {
        user: async (post, args, { models }) =>
            await models.User.findById(post.userId),
    },

    Subscription: {
        postCreated: {
            subscribe: () => pubsub.asyncIterator(EVENTS.POST.CREATED),
        },
    },
};