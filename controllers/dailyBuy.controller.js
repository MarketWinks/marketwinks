const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const DailyBuy = mongoose.model('DailyBuy');

module.exports.dailyBuyProfile = (req, res, next) =>{

    DailyBuy.find({}, (err, dailyBuy) => {
        console.log("Here we go");
        res.send(dailyBuy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var dailyBuy = new DailyBuy();
    dailyBuy.month = "4";
    dailyBuy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
