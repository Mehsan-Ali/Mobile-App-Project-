const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/Society");

const userCtrl = {
    //!Register
    register: asyncHandler(async (req, res) => {
        const { society } = req.body;
        console.log({ society });
        //!Validations
        if (!society ) {
            throw new Error("Please all fields are required");
        }

        const userCreated = await User.create({
            society
        });
        
        //!Send the response
        console.log("userCreated", userCreated);
        res.json({
            //   username: userCreated.username,
            society: userCreated.society,
            id: userCreated.id,
        });
    }),

    //!Login
    // login: asyncHandler(async (req, res) => {
    //     const { email, password } = req.body;
    //     //!Check if user email exists
    //     const user = await User.findOne({ email });
    //     console.log("user backend", user);
    //     if (!user) {
    //         throw new Error("Invalid credentials");
    //     }
    //     //!Check if user password is valid
    //     const isMatch = await bcrypt.compare(password, user.password);
    //     if (!isMatch) {
    //         throw new Error("Invalid credentials");
    //     }
    //     //! Generate the token
    //     const token = jwt.sign({ id: user._id }, "anyKey", { expiresIn: "30d" });
    //     //!Send the response
    //     res.json({
    //         message: "Login success",
    //         token,
    //         id: user._id,
    //         email: user.email,
    //         username: user.username,
    //     });
    // }),
    
    //!Profile
    profile: asyncHandler(async (req, res) => {
        //Find the user
        const user = await User.findById(req.user).select("-password");
        res.json({ user });
    }),
};
module.exports = userCtrl;