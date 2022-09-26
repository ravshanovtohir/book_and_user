
import { ApolloServer } from 'apollo-server-express';
import {
    ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageGraphQLPlayground
} from 'apollo-server-core';
import http from 'http';
import express from "express"

import "#config/index"

import model from './modules/users/model.js';
import sql from './modules/users/sql.js';


import schema from "./modules/index.js"

async function startApolloServer() {
    const app = express();

    app.get("/api/users", async (req, res) => {
        let users = await model.getUser(sql.GET_USER)
        res.send(users)
    })

    app.get("/api/books", async (req, res) => {
        let books = await model.getBook(sql.GET_BOOK)
        res.send(books)
    })


    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        schema,
        csrfPrevention: false,
        introspection: true,
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            ApolloServerPluginLandingPageGraphQLPlayground()
        ],
    });
    await server.start();
    server.applyMiddleware({
        app,
        path: "/graphql"
    });
    await new Promise(resolve => httpServer.listen({ port: process.env.PORT || 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
}
startApolloServer()