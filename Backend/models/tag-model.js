const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Tag = new Schema(
    {
        name: {
            type: String,
            enum: [
                'FOOD',
                'ACCOMODATION',
                'TRANSPORT',
                'CLOTHES',
                'HYGIENE_PRODUCTS',
                'OTHERS',
            ],
            required: true,
        },
        description: {
            type: String,
            required: false,
        }
    }
)

module.exports = mongoose.model('tags', Tag)
