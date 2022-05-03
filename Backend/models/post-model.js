const mongoose = require('mongoose')
const { TagSchema } = require('./tag-model')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;


const Post = new Schema(
    {
        benefactorId: {
            type: ObjectId,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        tags: {
            type: [TagSchema],
            required: true,
        },
        interestedRefugees: {
            type: [ObjectId],
            required: true,
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
