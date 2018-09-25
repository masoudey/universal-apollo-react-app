import 'babel-polyfill';
import 'dotenv/config';
import path from "path";
import * as http from "http";
import * as https from "https";
import * as fs from "fs";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import jwt from "jsonwebtoken";
import React from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import { ApolloServer } from 'apollo-server-express';
import { AuthenticationError } from 'apollo-server';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import mongoose from 'mongoose';
import { Helmet } from 'react-helmet';
import DataLoader from "dataloader";
import webConfig from "../webConfig";

import schema from "./Schema";
import resolvers from "./resolvers";
import models from "./models";

mongoose.connect(process.env.DB_CONNECTION_STRING, {useNewUrlParser: true}).then(() => {
    console.log("Connection to Database Successfull!");
}).catch((err) => {
    console.log("Connection to Database Error", err);
});

const PORT = process.env.PORT || 5000;
const configurations = {
    production: {ssl: true, port: PORT, hostname: 'whatever.com'},
    development: {ssl: false, port: PORT, hostname: 'localhost'}
}

const environment = process.env.NODE_ENV || 'production';
const config = configurations[environment];


const app = express();
app.use(cors({
    origin: webConfig.siteURL,
    credentials: true
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/', express.static('public'));

const getMe = async req => {
    const token = req.cookies.token ? req.cookies.token : null;
    if (token) {
        try {
            return await jwt.verify(token, process.env.JWT_SECRET);
        } catch (e) {
            throw new AuthenticationError('Session Expired...');
        }
    }
}

const apollo = new ApolloServer({
    typeDefs: schema,
    resolvers,
    formatError: error => {
        const message = error.message
            .replace('mogoose Validation Error: ', '')
            .replace('Validation error', '')
        return {
            ...error,
            message,
        };
    },
    context: async ({ req, connection}) => {
        if (connection) {
            return {
                models,
            };
        }


        if (req) {
            // const me = await getMe(req);
            const me = {
                "_id": {
                    "$oid": "5ba9f7a39dab691ef4af9ff2"
                },
                "users": [],
                "username": "masoudey",
                "email": "masoud.ey@gmail.com",
                "password": "$2b$10$uah18eeMB0O0iji9zwqXxeptqUiwbqXZdikxF9t.M2p67zHs4LEkO",
                "firstName": "masoud",
                "lastName": "eyvat",
                "createdAt": {
                    "$date": "2018-09-25T08:53:55.570Z"
                },
                "__v": 0
            }
            
            return {
                models,
                me,
                secret: process.env.JWT_SECRET,
            };
        }
    },
});
apollo.applyMiddleware({ app, path: '/graphql'});

var server

if (config.ssl) {
    server = https.createServer(
        {
            key: fs.readFileSync(`./ssl/${environment}/server.key`),
            cert: fs.readFileSync(`./ssl/${environment}/server.crt`)
        },
        app
    )
} else {
    server = http.createServer(app)
}

apollo.installSubscriptionHandlers(server);

server.listen({ port: config.port }, () => {
    console.log(
        '🚀 Server ready at',
        `http${config.ssl ? 's' : ''}://${config.hostname}:${config.port}${apollo.graphqlPath}`
      )
})

