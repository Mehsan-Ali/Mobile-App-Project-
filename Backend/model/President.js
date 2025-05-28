const mongoose = require("mongoose");

const presidentSchema = new mongoose.Schema(
  {
    president: {
      type: String,
      required: true
    },
    cgpa: {
      type: String,
      required: true
    },
    StdId: {
      type: String,
      required: true
    },
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
module.exports = mongoose.model("President", presidentSchema);