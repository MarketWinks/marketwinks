const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const UK_LSE_15MinBuy = mongoose.model('UK_LSE_15MinBuy');

module.exports.uK_LSE_15MinBuyProfile = (req, res, next) =>{

    UK_LSE_15MinBuy.find({}, (err, uK_LSE_15MinBuy) => {
        console.log("Here we go");
        res.send(uK_LSE_15MinBuy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var uK_LSE_15MinBuy = new UK_LSE_15MinBuy();
    uK_LSE_15MinBuy.month = "4";
    uK_LSE_15MinBuy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
