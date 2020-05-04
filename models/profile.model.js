const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const jwt = require('jsonwebtoken');

var profileSchema = new mongoose.Schema({

  
  name: {
    type: String
  },
  email: {
    type: String,
    },
  username: {
    type: String,
    
  },
  usercategory: {
    type: String
 },
 validtilldate: {
    type: String
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


profileSchema.methods.getProfileById = function(id, callback){
  Profile.findById(id, callback);
}

profileSchema.methods.getProfileByUsername = function(username, callback){
  const query = {username: username}
  Profile.findOne(query, callback);
}

profileSchema.methods.getProfileByEmail = function(email, callback){
  const query = {email: email}
  Profile.findOne(query, callback);
}

profileSchema.methods.addProfile = function(newProfile, callback){
   Profile.save(newProfile);
  //newProfile.save(callback);
    
}


// module.exports.updateProfile = function(profileWithUpdates, callback){
//   profileWithUpdates.update(callback);
 
// }

const Profile = module.exports = mongoose.model('Profile', profileSchema);





mongoose.model('Profile', profileSchema);