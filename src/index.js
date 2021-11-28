import { GraphQLServer } from 'graphql-yoga'
import dotenv from 'dotenv';

dotenv.config();
// Type Definition (Schema)
// String,Boolean,Int,Float,ID
const typeDefs = `
    type Query {
        me : User!
        post : Post!
        users(query : String) : [User!]!
        posts(query : String) : [Post!]!        
        comments : [Comment!]!
    }
    type User {
        id : ID!
        name : String!
        details : String
        posts : [Post!]!
        comments : [Comment!]!
    }
    type Post {
        id : ID!
        title : String!
        body : String!
        published : Boolean!
        author : User!
        comments : [Comment!]!
    }
    type Comment {
        id : ID!,
        text : String!
        author : User!
        post : Post!
    }
`

const comments = [
    {
        id: "101",
        text: "Hey Ashutosh ! You doing great work",
        author: "1",
        post: "1",
    },
    {
        id: "102",
        text: "Hey Raghav ! You doing great work",
        author: "2",
        post: "2",
    },
    {
        id: "3",
        text: "Hey Shubham ! You doing amazing work",
        author: "2",
        post: "2",
    },
    {
        id: "4",
        text: "I am papa react",
        author: "3",
        post: '3',
    },
]

const user = [
    {
        id: '1',
        name: "Ashutosh Singh",
        details: "ashu@dad.com",
        post: '1'
    },
    {
        id: '2',
        name: "Shubham Bhardwaj",
        details: "shubham@ff.com",
        post: '2'
    },
    {
        id: '3',
        name: "Ajay Yadav",
        details: "ajay@yadav.com",
        post: '3'
    }
]

const posts = [
    {
        id: '1',
        title: "share1",
        body: "share is amazing",
        published: true,
        author: "1",
    },
    {
        id: '2',
        title: "share2",
        body: "share was amazing",
        published: true,
        author: "1"
    },
    {
        id: '3',
        title: "share3",
        body: "share will amazing",
        published: false,
        author: "3"
    },
]



// Resolvers -> kind of set of function

const resolvers = {
    Query: {
        comments(parent, agrs, ctx, info) {
            return comments
        },
        posts(parent, args, ctx, info) {
            if (!args.query) {
                return posts
            }
            return posts.filter(post => {
                if (post.title.includes(args.query) || post.body.includes(args.query)) {
                    return post;
                }
            })
        },
        users(parent, args, ctx, info) {
            if (!args.query)
                return user
            return user.filter(user => user.name.toLowerCase().includes(args.query))
        },
        me(parent, args, context, info) {
            return {
                id: "124",
                name: "Ajay yadav",
                details: "Son of Papa React"
            }
        },
        post() {
            return {
                id: "124",
                title: "Digital Learning Group",
                body: "Its one of the best club in the history",
                published: true
            }
        }
    },
    Post: {
        author(parent, args, ctx, info) {
            console.log(parent);
            return user.find((user) => user.id === parent.author);
        },
        comments(parent, args, ctx, info) {
            return comments.filter(comment => comment.post == parent.id)
        }
    },
    User: {
        posts(parent, args, ctx, info) {
            return posts.filter(post => {
                return post.author == parent.id
            })
        },
        comments(parent, args, ctx, info) {
            return comments.filter(comment => comment.author == parent.id);
        }
    },
    Comment: {
        author(parent, args, ctx, info) {
            return user.find(user => user.id == parent.author)
        },
        post(parent, args, ctx, info) {
            return posts.find(post => post.id == parent.post);
        }
    }
}
const server = new GraphQLServer({
    typeDefs, resolvers
})

server.start(() => {
    console.log('The Server is Up')
})
