const mongoose = require("mongoose");

const Society = new mongoose.Schema(
  {
    society: { 
      type: String, 
      required: true 
    },
  //   socities: [{
  //     type: mongoose.Schema.Types.ObjectId, ref: 'myads'
  // }]
  },
  {
    timestamps: true,
  }
);

//Compile to form the model
module.exports = mongoose.model("Society", Society);