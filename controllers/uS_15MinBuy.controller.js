const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const US_15MinBuy = mongoose.model('US_15MinBuy');

module.exports.uS_15MinBuyProfile = (req, res, next) =>{

    US_15MinBuy.find({}, (err, uS_15MinBuy) => {
        console.log("Here we go");
        res.send(uS_15MinBuy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var uS_15MinBuy = new US_15MinBuy();
    uS_15MinBuy.month = "4";
    uS_15MinBuy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
