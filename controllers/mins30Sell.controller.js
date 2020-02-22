const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Mins30Sell = mongoose.model('Mins30Sell');
//const Mins30Sell = mongoose.model('User');

module.exports.mins30SellProfile = (req, res, next) =>{

    Mins30Sell.find({}, (err, mins30Sell) => {
        //return res.status(200).json({ status: true, mins30Sell: mins30Sell});
        console.log("Here we go");
        res.send(mins30Sell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var mins30Sell = new Mins30Sell();
    mins30Sell.month = "3";
    mins30Sell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
