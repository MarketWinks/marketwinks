const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const US_DailySell = mongoose.model('US_DailySell');
//const DailySell = mongoose.model('User');

module.exports.uS_DailySellProfile = (req, res, next) =>{

    US_DailySell.find({}, (err, uS_DailySell) => {
        //return res.status(200).json({ status: true, dailySell: dailySell});
        console.log("Here we go");
        res.send(uS_DailySell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var uS_DailySell = new US_DailySell();
    uS_DailySell.month = "3";
    uS_DailySell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
