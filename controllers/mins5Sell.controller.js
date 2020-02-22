const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Mins5Sell = mongoose.model('Mins5Sell');
//const Mins5Sell = mongoose.model('User');

module.exports.mins5SellProfile = (req, res, next) =>{

    Mins5Sell.find({}, (err, mins5Sell) => {
        //return res.status(200).json({ status: true, mins5Sell: mins5Sell});
        console.log("Here we go");
        res.send(mins5Sell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var mins5Sell = new Mins5Sell();
    mins5Sell.month = "3";
    mins5Sell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
