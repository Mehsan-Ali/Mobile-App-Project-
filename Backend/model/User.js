const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { 
      type: String, 
      required: true 
    },
    password: { 
      type: String, 
      required: true 
    },
    isAdmin: {
      type: Boolean,
      default: false
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
module.exports = mongoose.model("User", userSchema);