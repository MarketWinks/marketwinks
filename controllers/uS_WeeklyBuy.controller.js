const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const US_WeeklyBuy = mongoose.model('US_WeeklyBuy');

module.exports.uS_WeeklyBuyProfile = (req, res, next) =>{

    US_WeeklyBuy.find({}, (err, uS_WeeklyBuy) => {
        console.log("Here we go");
        res.send(uS_WeeklyBuy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var uS_WeeklyBuy = new US_WeeklyBuy();
    uS_WeeklyBuy.month = "4";
    uS_WeeklyBuy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
