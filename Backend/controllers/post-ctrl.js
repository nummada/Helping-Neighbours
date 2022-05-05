const UserModel = require('../models/user-model')

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

    Post.find({})
    .sort({
        updatedAt: 'desc'
    })
    .exec( async (err, posts) => {
        if (err) {
            console.log("[getAllPosts][Error][Could not get all posts]", err)
            return res.status(400).json({
                success: false,
                error: err
            })
        }

        if (posts) {
            console.log("[getAllPosts][OK][Posts]")

            var newPosts = await Promise.all(posts.map(async (post) => {
                var newPost = post

                var auth0Id = post.benefactorId

                user = await UserModel.findOne({ auth0Id })

                newPost.benefName = user.name
                newPost.benefEmail = user.email
                newPost.benefPhoneNo = user.phoneNumber
                return newPost
            }))

            return res.status(200).json({
                success: true,
                data: newPosts
            })
        }

        return res
            .status(404)
            .json({ success: false, error: `Posts not found` })
    })
}

const getPostsByTags = (req, res) => {

    var query = req.query
    console.log("[getPostsByTags][Params = %O]", query)

    var tagMap = {
        "Food": 'FOOD',
        "Accomodation": 'ACCOMODATION',
        "Transport": 'TRANSPORT',
        "Clothes": 'CLOTHES',
        "Hygiene products": 'HYGIENE_PRODUCTS',
        "Other": 'OTHER'
    }

    var tagsFilter = Object.keys(tagMap)
        .filter(tagName => query[tagName] === 'true')
        .map((tagName) => {
            return tagMap[tagName]
        })

    console.log("tagsFilter = [%O]", tagsFilter)

    Post.find({
        tags: {
            $all: tagsFilter
        }
    })
    .sort({
        updatedAt: 'desc'
    })
    .exec(
    async (err, posts) => {
        if (err) {
            console.log("[getPostsByTags][Error][Could not get all posts]", err)
            return res.status(400).json({
                success: false,
                error: err
            })
        }

        if (posts) {
            console.log("[getPostsByTags][OK][Posts][size = [%O]]", posts.length)

            var newPosts = await Promise.all(posts.map(async (post) => {
                var newPost = post

                var auth0Id = post.benefactorId

                user = await UserModel.findOne({ auth0Id })

                newPost.benefName = user.name
                newPost.benefEmail = user.email
                newPost.benefPhoneNo = user.phoneNumber
                return newPost
            }))

            return res.status(200).json({
                success: true,
                data: newPosts
            })
        }

        return res
            .status(404)
            .json({ success: false, error: `Posts not found` })
    })
}


const getPostsByBenefId = (req, res) => {
    var benefId = req.params.benefId
    console.log("[getPostsByBenefId][BenefId = %O]", benefId)

    Post.find({
        benefactorId: benefId

    })
    .sort({
        updatedAt: 'desc' // newest first
    })
    .exec(
    async (err, posts) => {
        if (err) {
            console.log("[getPostsByBenefId][Error][Could not get all posts]", err)
            return res.status(400).json({
                success: false,
                error: err
            })
        }

        if (posts) {
            console.log("[getPostsByBenefId][OK][Posts][size = [%O]]", posts.length)

            var newPosts = await Promise.all(posts.map(async (post) => {
                var newPost = post

                var auth0Id = post.benefactorId

                user = await UserModel.findOne({ auth0Id })

                newPost.benefName = user.name
                newPost.benefEmail = user.email
                newPost.benefPhoneNo = user.phoneNumber
                return newPost
            }))

            return res.status(200).json({
                success: true,
                data: newPosts
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
    getPostsByTags,
    getPostsByBenefId,
}
