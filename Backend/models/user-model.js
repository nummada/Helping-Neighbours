const mongoose = require('mongoose')
const { PostSchema } = require('./post-model')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;


const User = new Schema(
    {
        auth0Id: {
            type: String,
            required: true,
        },
        name: { 
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            // required: true,
        },
        accountType: {
            type: String,
            enum: ['BENEFACTOR', 'REFUGEE'],
            required: true,
        },
        posts: {
            type: [ObjectId],
            required: true,
        },
        postsInterested : {
            type: [ObjectId],
            required: false,
        }
    }
)

module.exports = mongoose.model('users', User)
