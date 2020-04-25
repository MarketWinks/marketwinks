const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');
const Profile = mongoose.model('Profile');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err){

            var newProfile = new Profile({
                name: req.body.fullName,
                email: req.body.email,
                username: req.body.email,
                location: "location is null",
                dateOfBirth: "dob is null",
                mobile: "mobile is null",
                occupation: "occupation is null"
              });
            

              newProfile.save((err, doc) => {
                if (!err){
                    console.log(newProfile);

                }

              });
          
  res.send(doc);

            }    
        else {
            console.log("ERROR IS:");
            console.log(err);
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['fullName','email']) });
        }
    );
}

module.exports.getProfile = (req, res, next) =>{

    console.log("this is incling req");
    console.log(req);
        Profile.find({email:req.params.email}, function(err, data){
         
       if(err){
              console.log(err);
              return
          }
      
          if(data.length == 0) {
              console.log("No record found")
              return
          }
          res.send(data);
      });
      

}