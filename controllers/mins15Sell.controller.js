const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Mins15Sell = mongoose.model('Mins15Sell');
//const Mins15Sell = mongoose.model('User');

module.exports.mins15SellProfile = (req, res, next) =>{

    Mins15Sell.find({}, (err, mins15Sell) => {
        //return res.status(200).json({ status: true, mins15Sell: mins15Sell});
        console.log("Here we go");
        res.send(mins15Sell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var mins15Sell = new Mins15Sell();
    mins15Sell.month = "3";
    mins15Sell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
