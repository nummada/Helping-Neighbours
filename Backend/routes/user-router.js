const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.post('/user', UserCtrl.createUser)
router.get('/user', UserCtrl.getUser)
router.get('/user/byAuth0Id/:auth0Id', UserCtrl.getUserByAuth0Id)

module.exports = router
