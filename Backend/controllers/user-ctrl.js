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

    var body = req.body
    var auth0Id = req.params.auth0Id

    console.log("[getUserByAuth0Id][req.body = [%O]]", body)

    console.log("SEARCHING USERS dupa auth0Id asta", auth0Id)
    
    // var docs = await User.find({ _id: auth0Id })
    //     .then((user, err) => {
    //         // if (err) {
    //         //     console.log("eroare tati", err)
    //         //     return res.status(400).json({
    //         //             success: false,
    //         //             error: err
    //         //         })
    //         // } else {
    //             console.log("uite ca avem si useru", user)
    //             return res.status(200).json({
    //                 success: true,
    //                 data: user
    //             })
    //         // }
    //     })
    //     .catch((err) => console.log(err))
    
    // console.log("avem docs", docs)


    User.findOne({ auth0Id }, (err, user) => {
        if (err) {
            console.log("eroare tati", err)
            return res.status(400).json({
                    success: false,
                    error: err
                })
        }

        if (user) {
            console.log("err=", err)
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


    // return res
    //     .status(404)
    //     .json({
    //         success: false,
    //         data: docs
    //     })
}

module.exports = {
    createUser,
    getUser,
    getUserByAuth0Id,
}
