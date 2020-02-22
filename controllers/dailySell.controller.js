const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const DailySell = mongoose.model('DailySell');
//const DailySell = mongoose.model('User');

module.exports.dailySellProfile = (req, res, next) =>{

    DailySell.find({}, (err, dailySell) => {
        //return res.status(200).json({ status: true, dailySell: dailySell});
        console.log("Here we go");
        res.send(dailySell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var dailySell = new DailySell();
    dailySell.month = "3";
    dailySell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
