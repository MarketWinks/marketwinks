const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const UK_LSE_30MinSell = mongoose.model('UK_LSE_30MinSell');
//const Mins30Sell = mongoose.model('User');

module.exports.uK_LSE_30MinSellProfile = (req, res, next) =>{

    UK_LSE_30MinSell.find({},null,{sort: {lastSellEvent:-1}}, (err, uK_LSE_30MinSell) => {
        //return res.status(200).json({ status: true, mins30Sell: mins30Sell});
        console.log("Here we go");
        res.send(uK_LSE_30MinSell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var uK_LSE_30MinSell = new UK_LSE_30MinSell();
    uK_LSE_30MinSell.month = "3";
    uK_LSE_30MinSell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
