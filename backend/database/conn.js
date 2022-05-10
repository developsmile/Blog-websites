// create database using mongoose
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/blogsite'
mongoose.connect(url)
const post = mongoose.Schema({
    title:String,
    content:String,
    createdAt:String
})
const Post = mongoose.model('Post',post);
module.exports = Post;