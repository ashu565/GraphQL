const User = {
    posts(parent, args, { user, comments, posts }, info) {
        return posts.filter(post => {
            return post.author == parent.id
        })
    },
    comments(parent, args, { user, comments, posts }, info) {
        console.log(comments, "HEEHE");
        return comments.filter(comment => comment.author == parent.id)
    }
}
export default User;