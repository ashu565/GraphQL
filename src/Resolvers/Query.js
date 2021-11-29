const Query = {
    comments(parent, agrs, { comments }, info) {
        return comments
    },
    posts(parent, args, { user, comments, posts }, info) {
        if (!args.query) {
            return posts
        }
        return posts.filter(post => {
            if (post.title.includes(args.query) || post.body.includes(args.query)) {
                return post;
            }
        })
    },
    users(parent, args, { user, comments, posts }, info) {
        if (!args.query)
            return user
        return user.filter(user => user.name.toLowerCase().includes(args.query))
    },
    me(parent, args, { user, comments, posts }, info) {
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
}
export default Query;