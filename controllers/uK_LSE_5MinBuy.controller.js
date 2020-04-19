const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const UK_LSE_5MinBuy = mongoose.model('UK_LSE_5MinBuy');

module.exports.uK_LSE_5MinBuyProfile = (req, res, next) =>{

    UK_LSE_5MinBuy.find({}, (err, uK_LSE_5MinBuy) => {
        console.log("Here we go Chocs");
        console.log(uK_LSE_5MinBuy);
        res.send(uK_LSE_5MinBuy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var uK_LSE_5MinBuy = new UK_LSE_5MinBuy();
    uK_LSE_5MinBuy.month = "4";
    uK_LSE_5MinBuy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
