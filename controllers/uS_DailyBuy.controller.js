const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const US_DailyBuy = mongoose.model('US_DailyBuy');

module.exports.uS_DailyBuyProfile = (req, res, next) =>{

    US_DailyBuy.find({}, (err, uS_DailyBuy) => {
        console.log("Here we go");
        res.send(uS_DailyBuy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var uS_DailyBuy = new US_DailyBuy();
    uS_DailyBuy.month = "4";
    uS_DailyBuy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
