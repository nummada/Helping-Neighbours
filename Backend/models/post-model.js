const mongoose = require('mongoose')
const Tag = require('./tag-model')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;


const Post = new Schema(
    {
        beneactorId: {
            type: ObjectId,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        tags: {
            type: [Tag],
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

module.exports = mongoose.model('posts', Post)
