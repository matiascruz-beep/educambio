import User from "./user.js";
import Post from "./post.js";

const models = {
    profile: User,
    users: User,
    posts: Post,
    category: Post,
}

export default models;