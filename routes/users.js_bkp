const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Profile = require('../models/profile');
const Product = require('../models/product');
const Individualcourse = require('../models/individualcourse');
const Course = require('../models/course');
const Cmodule = require('../models/cmodule');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    
    password: req.body.password,
    role: 'users'
  });

  let newProfile = new Profile({
    name: req.body.name,
    email: req.body.email,
    
    location: "location is null"
  });

  console.log("new profile");
  console.log(newProfile);
  
  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({
        success: false,
        msg: 'Failed to register user'
      });
    } else {
      
  // Profile.addProfile(newProfile, (err, user) => {
  //   console.log("Profile added in toute1");
  // });
      res.json({
        success: true,
        msg: 'User registered'
      });
    }
  });



});


router.post('/addProfile', (req, res, next) => {
  
  let newProfile = new Profile({
    name: req.body.name,
    email: req.body.email,
    
    location: "location is null",
    mobile: "mobile is null",
    occupation: "occupation is null",
    dateOfBirth: "dateOfBirth is null"

  });
  
  console.log(newProfile);

  Profile.addProfile(newProfile, (err, user) => {
    if (err) {
      res.json({
        success: false
      });
    } else {
      
      res.json({
        success: true
      });
    }
  });


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


// Authenticate
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  console.log("RECEIVED");
  console.log(req.body);

  User.getUserByEmail(email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        msg: 'User not found'
      });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {

      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign({
          data: user
        }, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            
            email: user.email,
            role: user.role
          }
        });
      } else {
        return res.json({
          success: false,
          msg: 'Wrong password'
        });
      }
    });
  });
});

// Profile
// router.get('/profile', passport.authenticate('jwt', {
//   session: false
// }), (req, res, next) => {
//   res.json({
//     user: req.user
//   });
// });


router.get('/profile/:email', function(req, res, next){

  // Profile.getProfileByEmail({email:req.params.email}, function(err, data){
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
})
});


router.get('/coursesByCourseCategory/:courseCategory', function(req, res, next){
    
  console.log("incoming request");
  console.log(req.params.courseCategory);
  
  Course.find({courseCategory:req.params.courseCategory}, function(err, data){
    if(err){
        console.log(err);
        return
    }

    if(data.length == 0) {
        console.log("No record found")
        return
    }

    res.send(data);
})
});


router.get('/course/:courseName', function(req, res, next){
    
  Individualcourse.find({courseName:req.params.courseName}, function(err, data){
    if(err){
        console.log(err);
        return
    }

    if(data.length == 0) {
        console.log("No record found")
        return
    }

    res.send(data);
})
});



router.get('/cmodulesByCourseName/:courseName', function(req, res, next){
    console.log("final step");
    console.log(req.params.courseName);
  Cmodule.find({courseName:req.params.courseName}, function(err, data){
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


router.get('/cmodule/:cmoduleName', function(req, res, next){
    
  Cmodule.find({cmoduleName:req.params.cmoduleName}, function(err, data){
    if(err){
        console.log(err);
        return
    }

    if(data.length == 0) {
        console.log("No record found")
        return
    }

    res.send(data);
})
});





// {

//   console.log("I found omething");
//   console.log(req.params);

//   const courseName = req.body.courseName;

//   Individualcourse.find(courseName, (err, courseName) => {
//     if (err) throw err;
//     if (!courseName) {
//       return res.json({
//         success: false,
//         msg: 'courseName not found'
//       });
//     }


//   });

//   console.log(res.json);

// });


//Product rereive
router.get('/product', (req, res, next) => {
  Product.find(function (err, product) {

    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
      res.send(err)
    res.json(product); // return all todos in JSON format
  });

});


router.post('/addproduct', passport.authenticate('jwt', {
  session: false
}), (req, res, next) => {
  let newProduct = new Product({
    name: req.body.name,
    img: req.body.img,
    description: req.body.description,
    Catag: req.body.Catag
  });

  Product.addProduct(newProduct, (err, product) => {
    if (err) {
      res.json({
        success: false,
        msg: 'Failed to add new product'
      });
    } else {
      res.json({
        success: true,
        msg: 'Product is added '
      });
    }
  });
});

router.put('/editproduct', passport.authenticate('jwt', {
  session: false
}), (req, res, next) => {
  let newProduct = {
    name: req.body.name,
    img: req.body.img,
    description: req.body.description,
    Catag: req.body.Catag
  };

  let oldProductID = req.body.oldId;

  Product.editProduct(oldProductID, newProduct, (err, product) => {
    if (err) {
      res.json({
        success: false,
        msg: 'Failed to update  product'
      });
    } else {
      res.json({
        success: true,
        msg: 'Product is updated '
      });
    }
  });
});

router.delete('/deleteproduct/:productId', passport.authenticate('jwt', {
  session: false
}), (req, res, next) => {

  let productID= req.params.productId;

  Product.removeProduct(productID, (err, product) => {
    if (err) {
      res.json({
        success: false,
        msg: 'Failed to update  product'
      });
    } else {
      res.json({
        success: true,
        msg: 'Product is updated '
      });
    }
  });
});

router.get('/manageproduct', passport.authenticate('jwt', {
  session: false
}), (req, res, next) => {
  Product.find(function (err, product) {
    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
      res.send(err)
    res.json(product); // return all todos in JSON format
  });
});

module.exports = router;