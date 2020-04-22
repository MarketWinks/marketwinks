const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const US_15MinSell = mongoose.model('US_15MinSell');
//const Mins15Sell = mongoose.model('User');

module.exports.uS_15MinSellProfile = (req, res, next) =>{

    US_15MinSell.find({}, (err, uS_15MinSell) => {
        //return res.status(200).json({ status: true, mins15Sell: mins15Sell});
        console.log("Here we go");
        res.send(uS_15MinSell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var uS_15MinSell = new US_15MinSell();
    uS_15MinSell.month = "3";
    uS_15MinSell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
