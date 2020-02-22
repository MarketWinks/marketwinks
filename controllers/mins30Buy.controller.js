const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Mins30Buy = mongoose.model('Mins30Buy');

module.exports.mins30BuyProfile = (req, res, next) =>{

    Mins30Buy.find({}, (err, mins30Buy) => {
        console.log("Here we go");
        res.send(mins30Buy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var mins30Buy = new Mins30Buy();
    mins30Buy.month = "4";
    mins30Buy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
