const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const MonthlyBuy = mongoose.model('MonthlyBuy');

module.exports.monthlyBuyProfile = (req, res, next) =>{

    MonthlyBuy.find({}, (err, monthlyBuy) => {
        console.log("Here we go");
        res.send(monthlyBuy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var monthlyBuy = new MonthlyBuy();
    monthlyBuy.month = "4";
    monthlyBuy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
