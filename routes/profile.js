const express = require('express');
const router = express.Router();
const config = require('../config/database');
const User = require('../models/user.model');
const Profile = require('../models/profile.model');



// router.post('/addProfile', (req, res, next) => {
  
//   let newProfile = new Profile({
//     name: req.body.name,
//     email: req.body.email,
    
//     location: "location is null",
//     mobile: "mobile is null",
//     occupation: "occupation is null",
//     dateOfBirth: "dateOfBirth is null"

//   });
  
//   console.log(newProfile);

//   Profile.addProfile(newProfile, (err, user) => {
//     if (err) {
//       res.json({
//         success: false
//       });
//     } else {
      
//       res.json({
//         success: true
//       });
//     }
//   });


// });






router.put('/updateProfile', (req, res, next) => {
  console.log("Updating for a profile");
  console.log(req.body);

  let profileWithUpdates = new Profile({
    _id: req.body._id,
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    location: req.body.location,
    dateOfBirth: req.body.dateOfBirth,
    occupation: req.body.occupation,
  });
  
  Profile.findByIdAndUpdate({_id:profileWithUpdates._id}, profileWithUpdates, (err, profileWithUpdates) => {
    if (err) {
      console.log(err);
      res.send({
        success: false
      });
      return
    }
      
      res.json({
        success: true
      });
    });



});


router.get('/profile/:email', function(req, res, next){

  console.log(req);
  
  Profile.findOne({email:req.params.email}, function(err, data){

 if(err){
        console.log(err);
        return
    }

    if(data.length == 0) {
        console.log("No record found")
        return
    }
    console.log(data);
    res.send(data);
})
});


router.put('/updateProfile', (req, res, next) => {
  console.log("Updating for a profile");
  console.log(req.body);

  let profileWithUpdates = new Profile({
    _id: req.body._id,
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    location: req.body.location,
    dateOfBirth: req.body.dateOfBirth,
    occupation: req.body.occupation,
  });
  
  Profile.findByIdAndUpdate({_id:profileWithUpdates._id}, profileWithUpdates, (err, profileWithUpdates) => {
    if (err) {
      console.log(err);
      res.send({
        success: false
      });
      return
    }
      
      res.json({
        success: true
      });
    });



});


module.exports = router;