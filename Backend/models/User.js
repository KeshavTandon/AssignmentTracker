const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  rollno:{
    type:Number,
    required:true,
    unique:true,
    trim:true,
  },

  fullname:{
    type:String,
    required:true,
    unique:true,
    trim:true,
  },

  mobile:{
    type:Number,
    require:true,
    trim:true,
  },
  
  password: {
    type: String,
    required: true,
  },

  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.methods.verifyPassword = async function (password) {
  const user = this;
  const isMatch = await bcrypt.compare(password, user.password);
  return isMatch;
};

const User = mongoose.model("User", userSchema);

module.exports = User;