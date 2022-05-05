const express = require('express')
const PostCtrl = require('../controllers/post-ctrl')

const router = express.Router()

// const Router = require("express-promise-router");
// const router = Router();

router.post('/post', PostCtrl.createPost)
router.get('/posts', PostCtrl.getAllPosts)
router.get('/posts/byTags', PostCtrl.getPostsByTags)
router.get('/user/:benefId/posts', PostCtrl.getPostsByBenefId)

module.exports = router
