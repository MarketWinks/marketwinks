const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const UK_LSE_5MinSell = mongoose.model('UK_LSE_5MinSell');
//const Mins5Sell = mongoose.model('User');

module.exports.uK_LSE_5MinSellProfile = (req, res, next) =>{
    
    UK_LSE_5MinSell.find({},null,{sort: {lastSellEvent:-1}}, (err, uK_LSE_5MinSell) => {
        //return res.status(200).json({ status: true, mins5Sell: mins5Sell});
        console.log("Here we go");
        res.send(uK_LSE_5MinSell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var uK_LSE_5MinSell = new UK_LSE_5MinSell();
    uK_LSE_5MinSell.month = "3";
    uK_LSE_5MinSell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
