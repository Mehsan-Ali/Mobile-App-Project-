const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/Secretary");
const User1 = require("../model/President");

const userCtrl = {
    //!Register
    register: asyncHandler(async (req, res) => {
        const { secretary, cgpa, StdId } = req.body;
        console.log({ secretary, cgpa, StdId });
        //!Validations
        if (!secretary || !cgpa || !StdId) {
            throw new Error("Please all fields are required");
        }
        //! check if user already exists
        const userExits = await User.findOne({ StdId });
        // console.log("userExits", userExits);
        if (userExits) {
            throw new Error("User already enrolled in other society");
        }
        const userExits1 = await User1.findOne({ StdId });
        // console.log("userExits", userExits);
        if (userExits1) {
            throw new Error("User already enrolled in other society");
        }
        //! Hash the user password
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(password, salt);
        //!Create the user
        const userCreated = await User.create({
            secretary,
            cgpa,
            StdId,
        });
        //!Send the response
        console.log("userCreated", userCreated);
        res.json({
            //   username: userCreated.username,
            secretary: userCreated.secretary,
            cgpa: userCreated.cgpa,
            StdId: userCreated.StdId,
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