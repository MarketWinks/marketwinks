const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const UK_LSE_WeeklyBuy = mongoose.model('UK_LSE_WeeklyBuy');

module.exports.uK_LSE_WeeklyBuyProfile = (req, res, next) =>{

    UK_LSE_WeeklyBuy.find({}, (err, uK_LSE_WeeklyBuy) => {
        console.log("Here we go");
        res.send(uK_LSE_WeeklyBuy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var uK_LSE_WeeklyBuy = new UK_LSE_WeeklyBuy();
    uK_LSE_WeeklyBuy.month = "4";
    uK_LSE_WeeklyBuy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
