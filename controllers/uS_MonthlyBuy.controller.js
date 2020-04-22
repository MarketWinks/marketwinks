const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const US_MonthlyBuy = mongoose.model('US_MonthlyBuy');

module.exports.uS_MonthlyBuyProfile = (req, res, next) =>{

    US_MonthlyBuy.find({}, (err, uS_MonthlyBuy) => {
        console.log("Here we go");
        res.send(uS_MonthlyBuy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var uS_MonthlyBuy = new US_MonthlyBuy();
    uS_MonthlyBuy.month = "4";
    uS_MonthlyBuy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
