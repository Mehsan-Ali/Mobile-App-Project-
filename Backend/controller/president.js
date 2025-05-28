const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/President");

const userCtrl = {
    //!Register
    register: asyncHandler(async (req, res) => {
        const { president, cgpa, StdId, society } = req.body;
        console.log({ president, cgpa, StdId, society });
        //!Validations
        if (!president || !cgpa || !StdId || !society) {
            throw new Error("Please all fields are required");
        }

        //! check if user already exists
        const userExits = await User.findOne({ StdId });

        // console.log("userExits", userExits);

        if (userExits) {
            throw new Error("User already enrolled in other society");
        }

        //!Create the user
        const userCreated = await User.create({
            president,
            cgpa,
            StdId,
            society,
        });
        //!Send the response
        console.log("userCreated", userCreated);
        res.json({
            //   username: userCreated.username,
            president: userCreated.president,
            cgpa: userCreated.cgpa,
            society: userCreated.society,
            StdId: userCreated.StdId,
            _id: userCreated._id,
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
        const user = await User.find()
        res.json(user);
    }),
};
module.exports = userCtrl;