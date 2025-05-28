const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/Vote");

const userCtrl = {
    //!Register
    register: asyncHandler(async (req, res) => {
        const { vote, PreId, UserId } = req.body;
        console.log({ vote, PreId, UserId});
        //!Validations
        if (!vote) {
            throw new Error("Please all fields are required");
        }

        //! check if user already exists
        const userExits = await User.findOne({ UserId });

        // console.log("userExits", userExits);

        if (userExits) {
            throw new Error("User already voted in other society");
        }

        //!Create the user
        const userCreated = await User.create({
            vote,
            PreId,
            UserId
        });
        //!Send the response
        console.log("userCreated", userCreated);
        res.json({
            //   username: userCreated.username,
            // president: userCreated.president,
            // cgpa: userCreated.cgpa,
            vote: userCreated.vote,
            PreId: userCreated.PreId,
            UserId: userCreated.UserId,
            _id: userCreated._id,
        });
    }),


    //!Profile
    profile: asyncHandler(async (req, res) => {
        //Find the user
        const user = await User.find()
        res.json(user);
    }),
};
module.exports = userCtrl;