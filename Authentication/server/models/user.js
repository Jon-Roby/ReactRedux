const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true},
  password: String
});

// On Save hook, encrypt password
// Before saving a model, run this function
userSchema.pre('save', function(next) {
  // Get access to user model
  // So user is an instance of the user model
  const user = this; // user.email or user.password

  // Generate a salt, then run call back

  //
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }

    // hash (encrypt) our password using salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err); }

      // overwrite plain text password with encrypted password
      user.password = hash;
      next();
    });
  });
});

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;
