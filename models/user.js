const mongoose =require('mongoose');
const { Schema } = mongoose;
const blogSchema = new Schema({
    username: String ,
    email:String ,
    password:String,
    nickname:String,
 })
 module.exports = mongoose.model('Blog', blogSchema);