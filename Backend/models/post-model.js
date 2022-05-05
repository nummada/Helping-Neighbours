const mongoose = require('mongoose')
const { TagSchema, TagModel } = require('./tag-model')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;


const Post = new Schema(
    {
        benefactorId: {
            type: String, // auth0Id
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        tags: {
            type: [
                String
            ],
            required: true,
        },
        interestedRefugees: {
            type: [String], // still auth0Id
            required: true,
        },

        // address
        benefCounty: {
            type: String,
        },
        benefAddress: {
            type: String,
        },

        // to be filled at get
        benefName: {
            type: String,
        },
        benefCounty: {
            type: String,
        },
        benefAddress: {
            type: String,
        },
        benefEmail: {
            type: String,
        },
        benefPhoneNo: {
            type: String,
        },
    },

    // options
    {
        timestamps: true
    }
);

module.exports = {
    PostModel: mongoose.model('posts', Post),
    PostSchema: Post
}
