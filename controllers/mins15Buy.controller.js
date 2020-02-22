const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Mins15Buy = mongoose.model('Mins15Buy');

module.exports.mins15BuyProfile = (req, res, next) =>{

    Mins15Buy.find({}, (err, mins15Buy) => {
        console.log("Here we go");
        res.send(mins15Buy);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var mins15Buy = new Mins15Buy();
    mins15Buy.month = "4";
    mins15Buy.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
