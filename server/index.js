import 'babel-polyfill';
import 'dotenv/config';
import path from "path";
import http from "http";
import https from "https";
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

const apollo = new ApolloServer({})
apollo.applyMiddleware({ app, path: '/graphql'});

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})

