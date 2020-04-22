const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const US_5MinSell = mongoose.model('US_5MinSell');
//const Mins5Sell = mongoose.model('User');

module.exports.uS_5MinSellProfile = (req, res, next) =>{

    US_5MinSell.find({}, (err, uS_5MinSell) => {
        //return res.status(200).json({ status: true, mins5Sell: mins5Sell});
        console.log("Here we go");
        res.send(uS_5MinSell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var uS_5MinSell = new US_5MinSell();
    uS_5MinSell.month = "3";
    uS_5MinSell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
