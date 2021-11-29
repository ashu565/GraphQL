import { GraphQLServer } from 'graphql-yoga'
import dotenv from 'dotenv';
import { user, posts, comments } from "./helpers/data";
import Query from "./Resolvers/Query"
import Mutation from "./Resolvers/Mutation"
import Post from "./Resolvers/Post"
import Comment from "./Resolvers/Comment"
import User from "./Resolvers/User"

dotenv.config();
// Type Definition (Schema)
// String,Boolean,Int,Float,ID

const resolvers = {
    Query,
    Mutation,
    Post,
    Comment,
    User
}
const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql", resolvers, context: { user, posts, comments }
})

server.start(() => {
    console.log('The Server is Up')
})
