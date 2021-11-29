const Post = {
    author(parent, args, { user }, info) {
        console.log(parent);
        return user.find((user) => user.id === parent.author);
    },
    comments(parent, args, { user, comments, posts }, info) {
        return comments.filter(comment => comment.post == parent.id)
    }
}
export default Post;