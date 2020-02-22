const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const ProfileSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    },
  username: {
    type: String,
    
  },
  location: {
    type: String,
    
  },
  dateOfBirth: {type: String,
  },
  mobile: {type: String,
  },
  occupation: {type: String,
  }
});

const Profile = module.exports = mongoose.model('Profile', ProfileSchema);

module.exports.getProfileById = function(id, callback){
  Profile.findById(id, callback);
}

module.exports.getProfileByUsername = function(username, callback){
  const query = {username: username}
  Profile.findOne(query, callback);
}

module.exports.getProfileByEmail = function(email, callback){
  const query = {email: email}
  Profile.findOne(query, callback);
}

module.exports.addProfile = function(newProfile, callback){
   //Profile.save(newProfile);
  newProfile.save(callback);
    
}

// module.exports.updateProfile = function(profileWithUpdates, callback){
//   profileWithUpdates.update(callback);
 
// }