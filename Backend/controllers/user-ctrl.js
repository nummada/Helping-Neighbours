const User = require('../models/user-model')

const createUser = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }

    const user = new User(body)

    if (!user) {
        return res.status(400).json({
            success: false,
            error: err,
            custom: 'Syntax error -  you need to fill all the required fields'
        })
    }

    user.save()
        .then(() => {
            console.log("am adaugat userul ", user)

            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User created!',
            })
        })
        .catch(error => {
            return res.status(500).json({
                error,
                message: 'User not created! - DB ERROR',
                custom: "aici2"
            })
        })
}

const getUser = async (req, res) => {
    await User.find({}, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!user.length) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

const getUserByAuth0Id = (req, res) => {
    var auth0Id = req.params.auth0Id

    console.log("[getUserByAuth0Id][auth0Id = %O]", auth0Id)

    User.findOne({ auth0Id }, (err, user) => {
        if (err) {
            console.log("[getUserByAuth0Id][error = %O]", err)
            return res.status(400).json({
                    success: false,
                    error: err
                })
        }

        if (user) {
            console.log("user=", user)
            return res.status(200).json({
                success: true,
                data: user
            })
        }

        return res
            .status(404)
            .json({ success: false, error: `User not found` })
    })

}

const getUserById = (req, res) => {
    var _id = req.params.id

    console.log("[getUserById][_id = %O]", _id)

    User.findOne({ _id }, (err, user) => {
        if (err) {
            console.log("[getUserById][error = %O]", err)
            return res.status(400).json({
                    success: false,
                    error: err
                })
        }

        if (user) {
            console.log("user=", user)
            return res.status(200).json({
                success: true,
                data: user
            })
        }

        return res
            .status(404)
            .json({ success: false, error: `User not found` })
    })
}

module.exports = {
    createUser,
    getUser,
    getUserByAuth0Id,
    getUserById,
}
