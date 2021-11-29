const Comment = {
    author(parent, args, { user, comments, posts }, info) {
        return user.find(user => user.id == parent.author)
    },
    post(parent, args, { user, comments, posts }, info) {
        return posts.find(post => post.id == parent.post);
    }
}
export default Comment;