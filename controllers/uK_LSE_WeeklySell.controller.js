const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const UK_LSE_WeeklySell = mongoose.model('UK_LSE_WeeklySell');
//const WeeklySell = mongoose.model('User');

module.exports.uK_LSE_WeeklySellProfile = (req, res, next) =>{

    UK_LSE_WeeklySell.find({},null,{sort: {lastSellEvent:-1}}, (err, uK_LSE_WeeklySell) => {
        //return res.status(200).json({ status: true, weeklySell: weeklySell});
        console.log("Here we go");
        res.send(uK_LSE_WeeklySell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var uK_LSE_WeeklySell = new UK_LSE_WeeklySell();
    uK_LSE_WeeklySell.month = "3";
    uK_LSE_WeeklySell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
