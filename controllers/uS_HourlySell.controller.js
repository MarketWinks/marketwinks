const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const US_HourlySell = mongoose.model('US_HourlySell');
//const HourlySell = mongoose.model('User');

module.exports.uS_HourlySellProfile = (req, res, next) =>{

    US_HourlySell.find({}, (err, uS_HourlySell) => {
        //return res.status(200).json({ status: true, hourlySell: hourlySell});
        console.log("Here we go");
        res.send(uS_HourlySell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var uS_HourlySell = new US_HourlySell();
    uS_HourlySell.month = "3";
    uS_HourlySell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
