const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const CourseSchema = mongoose.Schema({
  courseCategory: {
    type: String,
    required: true
  },
  courseName: {
    type: String,
    required: true
  },
  courseDescription: {
    type: String,
    required: true
  },
  courseImage: {
    type: String
  },
  isActive: {
    type:String
  }
});

const Course = module.exports = mongoose.model('Course', CourseSchema);

// module.exports.getUserById = function(id, callback){
//   User.findById(id, callback);
// }

// module.exports.getIndividualCourseDetailsByCourseName = function(courseName, callback){
//   const query = {courseName: courseName}
//   Individualcourse.findAll(query, callback);
// }

module.exports.getCoursesByCourseCategory = (req, res, next) =>{
    
  Course.find({courseCategory: req.body.courseCategory},
      (err, course) => {
          if (!course)
              return res.status(404).json({ status: false, message: 'Record not found.' });
          else
              return res.status(200).json({ status: true, course : _.pick(course,['courseCategory','courseName','courseDescription','courseImage','isActive']) });
      }
  );
}


// module.exports.addUser = function(newUser, callback){
//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(newUser.password, salt, (err, hash) => {
//       if(err) throw err;
//       newUser.password = hash;
//       newUser.save(callback);
//     });
//   });
// }

// module.exports.comparePassword = function(candidatePassword, hash, callback){
//   bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
//     if(err) throw err;
   
//     callback(null, isMatch);
//   });
// }
