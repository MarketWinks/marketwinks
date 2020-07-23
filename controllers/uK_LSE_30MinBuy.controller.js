const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const UK_LSE_30MinBuy = mongoose.model('UK_LSE_30MinBuy');

module.exports.uK_LSE_30MinBuyProfile = (req, res, next) =>{

    UK_LSE_30MinBuy.find({},null,{sort: {lastBuyEvent:-1}}, (err, uK_LSE_30MinBuy) => {
        console.log("Here we go");
        res.send(uK_LSE_30MinBuy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var uK_LSE_30MinBuy = new UK_LSE_30MinBuy();
    uK_LSE_30MinBuy.month = "4";
    uK_LSE_30MinBuy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
