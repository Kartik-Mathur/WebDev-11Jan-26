const userModel = require('../models/users');

module.exports.createUser = async (req, res, next) => {
    const {
        username,
        password,
        profileImage,
        email,
        address,
    } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: "Username or password missing"
        })
    }

    try {
        let user = await usersModel.create({
            username,
            password,
            profileImage: profileImage || "",
            email: email || "",
            address: address || "",
        })
        res.status(200).json({
            message: "User created successfully",
            status: 200,
            user: {
                username,
                profileImage,
                email
            }
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error
        })
    }

}