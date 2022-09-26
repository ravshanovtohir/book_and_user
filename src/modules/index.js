import { makeExecutableSchema } from '@graphql-tools/schema'

import book from './books/index.js'
import user from './users/index.js'

export default makeExecutableSchema({
    typeDefs: [
        book.typeDefs,
        user.typeDefs,
    ],
    resolvers: [
        book.resolvers,
        user.resolvers
    ],
})