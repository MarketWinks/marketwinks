const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const US_WeeklySell = mongoose.model('US_WeeklySell');
//const WeeklySell = mongoose.model('User');

module.exports.uS_WeeklySellProfile = (req, res, next) =>{

    US_WeeklySell.find({}, (err, uS_WeeklySell) => {
        //return res.status(200).json({ status: true, weeklySell: weeklySell});
        console.log("Here we go");
        res.send(uS_WeeklySell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var uS_WeeklySell = new US_WeeklySell();
    uS_WeeklySell.month = "3";
    uS_WeeklySell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
