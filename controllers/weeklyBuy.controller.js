const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const WeeklyBuy = mongoose.model('WeeklyBuy');

module.exports.weeklyBuyProfile = (req, res, next) =>{

    WeeklyBuy.find({}, (err, weeklyBuy) => {
        console.log("Here we go");
        res.send(weeklyBuy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var weeklyBuy = new WeeklyBuy();
    weeklyBuy.month = "4";
    weeklyBuy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
