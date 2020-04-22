const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const US_30MinSell = mongoose.model('US_30MinSell');
//const Mins30Sell = mongoose.model('User');

module.exports.uS_30MinSellProfile = (req, res, next) =>{

    US_30MinSell.find({}, (err, uS_30MinSell) => {
        //return res.status(200).json({ status: true, mins30Sell: mins30Sell});
        console.log("Here we go");
        res.send(uS_30MinSell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var uS_30MinSell = new US_30MinSell();
    uS_30MinSell.month = "3";
    uS_30MinSell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
