const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const UK_LSE_DailySell = mongoose.model('UK_LSE_DailySell');
//const DailySell = mongoose.model('User');

module.exports.uK_LSE_DailySellProfile = (req, res, next) =>{

    UK_LSE_DailySell.find({},null,{sort: {lastSellEvent:-1}}, (err, uK_LSE_DailySell) => {
        //return res.status(200).json({ status: true, dailySell: dailySell});
        console.log("Here we go");
        res.send(uK_LSE_DailySell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var uK_LSE_DailySell = new UK_LSE_DailySell();
    uK_LSE_DailySell.month = "3";
    uK_LSE_DailySell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
