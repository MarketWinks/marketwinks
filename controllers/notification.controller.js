const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Notification = mongoose.model('Notification');

module.exports.notificationProfile = (req, res, next) =>{

    console.log("trying to reach noti");
    console.log(req.params.email);
  
        Notification.find({targetuser: req.params.email, isRead:false},null,{sort: {time: -1}}, (err, notification) => {
        if (err){
            console.log(err);
            res.send(err);
        
        } else {
        console.log("Here we get");
        res.send(notification);
    }
    }
)};