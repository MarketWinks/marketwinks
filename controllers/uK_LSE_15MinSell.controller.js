const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const UK_LSE_15MinSell = mongoose.model('UK_LSE_15MinSell');
//const Mins15Sell = mongoose.model('User');

module.exports.uK_LSE_15MinSellProfile = (req, res, next) =>{

    UK_LSE_15MinSell.find({}, (err, uK_LSE_15MinSell) => {
        //return res.status(200).json({ status: true, mins15Sell: mins15Sell});
        console.log("Here we go");
        res.send(uK_LSE_15MinSell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var uK_LSE_15MinSell = new UK_LSE_15MinSell();
    uK_LSE_15MinSell.month = "3";
    uK_LSE_15MinSell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
