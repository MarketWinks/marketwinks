const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Mins5Buy = mongoose.model('Mins5Buy');

module.exports.mins5BuyProfile = (req, res, next) =>{

    Mins5Buy.find({}, (err, mins5Buy) => {
        console.log("Here we go");
        res.send(mins5Buy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var mins5Buy = new Mins5Buy();
    mins5Buy.month = "4";
    mins5Buy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
