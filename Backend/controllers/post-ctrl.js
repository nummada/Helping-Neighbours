const Post = require('../models/post-model')


const createPost = (req, resp) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a post',
        })
    }

    const post = new Post(body)

    if (!post) {
        return res.status(400).json({
            success: false,
            error: err,
            custom: "aici1"
        })
    }

    post
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'Post created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Post not created!',
                custom: "aici2"
            })
        })
}


module.exports = {
    createPost,
    // getUser,
}

