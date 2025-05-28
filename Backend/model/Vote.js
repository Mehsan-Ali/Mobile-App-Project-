const mongoose = require("mongoose");

const VoteSci = new mongoose.Schema(
    {
        vote: {
            type: Number,
            required: true
        },
        PreId: {
            type: String,
            required: true
        },
        UserId: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

//Compile to form the model

module.exports = mongoose.model("VoteScience", VoteSci);