const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const HourlyBuy = mongoose.model('HourlyBuy');

module.exports.hourlyBuyProfile = (req, res, next) =>{

    HourlyBuy.find({}, (err, hourlyBuy) => {
        console.log("Here we go");
        res.send(hourlyBuy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var hourlyBuy = new HourlyBuy();
    hourlyBuy.month = "4";
    hourlyBuy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
