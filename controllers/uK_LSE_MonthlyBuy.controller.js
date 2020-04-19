const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const UK_LSE_MonthlyBuy = mongoose.model('UK_LSE_MonthlyBuy');

module.exports.uK_LSE_MonthlyBuyProfile = (req, res, next) =>{

    UK_LSE_MonthlyBuy.find({}, (err, uK_LSE_MonthlyBuy) => {
        console.log("Here we go");
        res.send(uK_LSE_MonthlyBuy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var uK_LSE_MonthlyBuy = new UK_LSE_MonthlyBuy();
    uK_LSE_MonthlyBuy.month = "4";
    uK_LSE_MonthlyBuy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
