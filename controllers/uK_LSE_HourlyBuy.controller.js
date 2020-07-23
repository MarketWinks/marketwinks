const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const UK_LSE_HourlyBuy = mongoose.model('UK_LSE_HourlyBuy');

module.exports.uK_LSE_HourlyBuyProfile = (req, res, next) =>{

    UK_LSE_HourlyBuy.find({},null,{sort: {lastBuyEvent:-1}}, (err, uK_LSE_HourlyBuy) => {
        console.log("Here we go");
        res.send(uK_LSE_HourlyBuy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var uK_LSE_HourlyBuy = new UK_LSE_HourlyBuy();
    uK_LSE_HourlyBuy.month = "4";
    uK_LSE_HourlyBuy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
