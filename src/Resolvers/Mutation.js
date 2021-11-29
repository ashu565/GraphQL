import { uuid as uuidv4 } from 'uuidv4';
const Mutation = {
    createUser(parent, args, { user }, info) {
        console.log(user);
        const nameTaken = user.find((user) => user.name == args.data.name);
        if (nameTaken) {
            throw new Error("Name is Already Taken");
        }
        const newUser = {
            id: uuidv4(),
            ...args.data
        }
        user.push(newUser);
        console.log(user);
        return newUser
    },
    deleteUser(parent, args, { user, comments, posts }, info) {
        if (user.findIndex(user => user.id == args.id) === -1) {
            throw new Error("No User of such Id");
        }
        const newUsers = user.filter(user => user.id != args.id);

    },
    createPost(parent, args, { user, comments, posts }, info) {
        const { title, body, published, author } = args.data;
        if (!user.find(user => user.id == author)) {
            throw new Error("User Not found with this name");
        }
        const newPost = {
            id: uuidv4(),
            ...args.data
        }
        posts.push(newPost);
        return newPost;
    },
    createComment(parent, args, { user, posts, comments }, info) {
        const { text, author, post: Post } = args;
        console.log(args)
        if ((!user.find(user => user.id == author))) {
            throw new Error("User is Not availble");
        }
        if ((!posts.find(post => post.id == Post))) {
            throw new Error("Post is Not availble");
        }
        const comment = {
            id: uuidv4(),
            text,
            author,
            post: Post
        }
        comments.push(comment);
        return comment;
    },
}

export default Mutation;