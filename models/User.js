const mongoose = require('mongoose');
// this is the same as saying const Schema = mongoose.Schema; its destructuring
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }

});

mongoose.model('users', userSchema);
