const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const US_HourlyBuy = mongoose.model('US_HourlyBuy');

module.exports.uS_HourlyBuyProfile = (req, res, next) =>{

    US_HourlyBuy.find({}, (err, uS_HourlyBuy) => {
        console.log("Here we go");
        res.send(uS_HourlyBuy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var uS_HourlyBuy = new US_HourlyBuy();
    uS_HourlyBuy.month = "4";
    uS_HourlyBuy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
