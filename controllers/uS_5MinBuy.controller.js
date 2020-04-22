const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const US_5MinBuy = mongoose.model('US_5MinBuy');

module.exports.uS_5MinBuyProfile = (req, res, next) =>{

    US_5MinBuy.find({}, (err, uS_5MinBuy) => {
        console.log("Here we go Chocs");
        console.log(uS_5MinBuy);
        res.send(uS_5MinBuy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var uS_5MinBuy = new US_5MinBuy();
    uS_5MinBuy.month = "4";
    uS_5MinBuy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
