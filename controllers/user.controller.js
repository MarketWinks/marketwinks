const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
const request = require('request');




const User = mongoose.model('User');
const Profile = mongoose.model('Profile');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.recoverywordpetname = req.body.recoverywordpetname;
    user.activeToken = Math.floor((Math.random() * 123456789) + Math.random());
    user.activeExpires = Date.now() + 24 * 3600 * 1000;
    user.acceptTC = req.body.agreeTC;
    user.acceptTCDateTime = Date.now();

    user.save((err, doc) => {
        if (!err){

            
    var date = new Date(Date.now());
    date.setDate(date.getDate() + 7);
    

            var newProfile = new Profile({
                name: req.body.fullName,
                email: req.body.email,
                username: req.body.email,
                location: "location is null",
                dateOfBirth: "dob is null",
                mobile: "mobile is null",
                occupation: "occupation is null",
                usercategory: "TRIAL",
                validtilldate: date.toString()

              });
            

              newProfile.save((err, doc) => {
                if (!err){
                    console.log(newProfile);
                    
                    message = "Hello "+req.body.fullName+", Welcome%20to%20the%20MarketWinks%20Platform";
                    notificationlink = "http://mwnotifications.herokuapp.com/notifications/"+req.body.email.toString()+"/"+message.toString()+"/add";
                    request(notificationlink, (err, res) => {
                        if (err) { console.log(err); }
                        else if (!err){ console.log("Welcome notification added"); }
                    });

                }

              });

              var config = {
                host: 'smtpout.asia.secureserver.net',
                port: 25,
               // secure: true,
                auth: {
                    user: 'support@marketwinks.com',
                    pass: 'live9in@Us'
                }
            };
                
            var smtpTransport = nodemailer.createTransport(config);

            var link = 'https://www.marketwinks.com/verifyandactivateEmail?id='
            + user.activeToken;


            
        
            
          
              mailOptions={
                from: 'support@marketwinks.com',
                to : req.body.email,
                subject : "Please confirm your Email account for MarketWinks",
                // html : "Hello "+req.body.fullName+",<br><br> Welcome to MarketWinks!.<br><br>"+
                // "It’s time to confirm your email address.<br>"+
                // "Please Click on the link below to verify your email.<br><br>"+
                // link+"<br><br>Thank you,<br>MarketWinks Team!"

                html : "<!DOCTYPE html><html><body><div><div></div><div style=\"background:none;color:#a5a5a5;padding:0;margin:0;font-family:Helvetica,arial,sans-serif;font-size:15px;line-height:24px\"><div></div><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\"><tbody><tr><td style=\"background-color:#10085A\"><center><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td align=\"center\" style=\"font-weight:bold;font-style:italic;font-size:30px;font-family:'Lucida Sans','Lucida Sans Regular','Lucida Grande','Lucida Sans Unicode',Geneva,Verdana,sans-serif;color:#FFFFFF;padding:20px 0 10px 0\">MarketWinks</td></tr><tr><td align=\"center\"><img width=\"600px\" src=\"https://images.unsplash.com/photo-1583752028088-91e3e9880b46\" tabindex=\"0\"><div style=\"opacity: 0.01; left: 552px; top: 360.4px;\"></div></td></tr></tbody></table></center></td></tr><tr><td style=\"background-color:#f1f5f5\"><center><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td style=\"width:600px;background-color:white\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td style=\"font-family:Helvetica,arial,sans-serif;font-size:15px;line-height:24px;padding:35px;color:#a5a5a5;text-align:left\"><span style=\"color:#7893b5;font-size:20px;line-height:29px\">Hello "+req.body.fullName+",<br><br> Great news, Welcome to Marketwinks - you just took your first step into a trading experience where you are fully backed by AI. <br><br>Now you’re part of a community has analyses over a million data points on every single day to provide trading forecasts with the vision of improving every trader's portfolio health. <br><br>It’s time to confirm your email address and continue your journey. Please Click on the link below to verify your email address.</p><p>Enjoy Trading!</p><p style=\"font-style:italic\"> Team <span class=\"il\">Marketwinks</span></p><center><table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" style=\"border-collapse:separate;width:540px;width:175px\"><tbody><tr><td style=\"background-color:#46d633;border-color:#32aa22;border-style:hidden hidden solid hidden;border-width:0 0 2px 0;font-family:Arial,sans-serif;white-space:nowrap;height:54px;text-align:center\"><a href=link style=\"font-size:16px;text-align:center;font-weight:600;text-decoration:none;vertical-align:baseline;text-transform:uppercase\"><span style=\"padding:10px 10px;color:#ffffff\">Confirm my Email</span></a></td></tr></tbody></table></center></td></tr></tbody></table></td></tr></tbody></table></center></td></tr><tr><td style=\"background-color:#f1f5f5\"><center><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody></div></div></body></html>"
                
            };
            
            console.log(mailOptions);

            smtpTransport.sendMail(mailOptions, function(error, response){
                if(error){
                    console.log(error);
                    res.end("error");
                }else{
                    console.log("Message sent");
                    res.end("sent");
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




module.exports.verifyandactivateEmail = (req, res, next) => {

    User.findOne({ activeToken : req.query.id },
    (err, user) => {

        if (err){
            res.send("User already activated or some issues with activation. Please contact support@marketwinks.com");
            return;
        } 

        console.log("User identified");
        console.log(user);

        if (user == null){

            res.send("User already activated");
            return;

        }


        var myquery = { email: user.email };
        var newvalues = { $set: {active: true, activeToken: "TOKENUSED"} };
            User.updateOne(myquery, newvalues, function(err, res) {
                if (err) throw err;
                console.log("1 document updated");
        });
        res.send("Account Activated");
    
    }
    );
    
}


module.exports.updateUserCategorytoFull = (req, res, next) => {

    Profile.findOne({ email : req.query.email },
    (err, profile) => {
        var date = new Date(Date.now());
        date.setDate(date.getDate() + 30);
    
        var myquery = { email: profile.email };
        var newvalues = { $set: {usercategory: "FULL", validtilldate: date.toString()} };
        Profile.updateOne(myquery, newvalues, function(err, res) {
                if (err) throw err;
                console.log("1 document updated");
        });
        res.send("User Category in Profile updated to FULL");
    
    }
    );
    
}


module.exports.updateUserCategorytoNonrenew = (req, res, next) => {

    Profile.findOne({ email : req.query.id },
    (err, profile) => {
      
        var myquery = { email: profile.email };
        var newvalues = { $set: {usercategory: "NONRENEW"} };
        Profile.updateOne(myquery, newvalues, function(err, res) {
                if (err) throw err;
                console.log("1 document updated");
        });
        res.send("User Category in Profile updated to NONRENEW");
    
    }
    );
    
}




module.exports.changePassword = (req, res, next) => {
    //saltSecret1: String;

    //console.log(req.query.email);
    // newpwdgen = "passnew123";
    // saltSecret1 = null;

    console.log("received req in change pwd");
    console.log(req);

    
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.newpwdgen, salt, (err, hash) => {
            req.body.newpwdgen = hash;
//            this.saltSecret1 = salt;
        });
    });

    User.findOne({ email: req.body.email },
        (err, user) => {

            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                res.send(user);


                bcrypt.compare(req.body.recoverywordpetname, user.recoverywordpetname, function(err, isMatch) {
                    if (err) {
                        return res.status(404).json({ status: false, message: 'Error during recovery words compare' });
                        
                    }
                    else if (!isMatch) {
                      console.log("recovery words didn't match");
                      } else {
                    console.log("success");


                    var myquery = { email: req.body.email };
                var newvalues = { $set: {password: req.body.newpwdgen} };
                    User.updateOne(myquery, newvalues, function(err, res) {
                        if (err) throw err;
                        console.log("1 document updated");
                });
                
        }
                });
    console.log("Here in change pwd");

});
}


module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) {
            if(user.active){
            return res.status(200).json({ "token": user.generateJwt() });
            } else if(!user.active){
                return res.status(200).json("Please verify the email account");
            }
        }
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