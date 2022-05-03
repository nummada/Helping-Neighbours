// import PostModel as Post from '../models/post-model'

const PostPackage = require('../models/post-model')
const Post = PostPackage.PostModel

const createPost = (req, res) => {
    const body = req.body

    if (!body) {
        console.log("[createPost][Error][Missing Body]")
        return res.status(400).json({
            success: false,
            error: 'You must provide a post',
        })
    }

    const post = new Post(body)

    if (!post) {
        console.log("[createPost][Error][Could not create post document]")
        return res.status(400).json({
            success: false,
            error: err,
        })
    }

    post.save((err, savedPost) => {
        if (err) {
            console.log("[createPost][Post Created][Could not save post]")
            return res.status(400).json({
                error: error,
                message: 'Post not created!',
            })
        }

        console.log("[createPost][Post Created][Post saved]")
        return res.status(201).json({
            success: true,
            id: savedPost._id,
            message: 'Post created!',
        })
    })
}

const getAllPosts = (req, res) => {
    console.log("[getAllPosts]")

    Post.find({}, (err, posts) => {
        if (err) {
            console.log("[getAllPosts][Error][Could not get all posts]", err)
            return res.status(400).json({
                success: false,
                error: err
            })
        }

        if (posts) {
            console.log("[getAllPosts][Error][OK][Posts = [%O]]", posts)
            return res.status(200).json({
                success: true,
                data: posts
            })
        }

        return res
            .status(404)
            .json({ success: false, error: `Posts not found` })
    })
}

module.exports = {
    createPost,
    getAllPosts,
}

