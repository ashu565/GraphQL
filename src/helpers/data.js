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
export { user, posts, comments };