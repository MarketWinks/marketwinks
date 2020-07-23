const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const UK_LSE_DailyBuy = mongoose.model('UK_LSE_DailyBuy');

module.exports.uK_LSE_DailyBuyProfile = (req, res, next) =>{

    UK_LSE_DailyBuy.find({},null,{sort: {lastBuyEvent:-1}}, (err, uK_LSE_DailyBuy) => {
        console.log("Here we go");
        res.send(uK_LSE_DailyBuy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var uK_LSE_DailyBuy = new UK_LSE_DailyBuy();
    uK_LSE_DailyBuy.month = "4";
    uK_LSE_DailyBuy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
