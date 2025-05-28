const mongoose = require("mongoose");

const Secretary = new mongoose.Schema(
  {
    secretary: { 
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
    // pref: {
    //   type: String, 
    //   required: true
    // }
  //   socities: [{
  //     type: mongoose.Schema.Types.ObjectId, ref: 'myads'
  // }]
  },
  {
    timestamps: true,
  }
);

//Compile to form the model
module.exports = mongoose.model("Secretary", Secretary);