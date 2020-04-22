const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const US_30MinBuy = mongoose.model('US_30MinBuy');

module.exports.uS_30MinBuyProfile = (req, res, next) =>{

    US_30MinBuy.find({}, (err, uS_30MinBuy) => {
        console.log("Here we go");
        res.send(uS_30MinBuy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var uS_30MinBuy = new US_30MinBuy();
    uS_30MinBuy.month = "4";
    uS_30MinBuy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
