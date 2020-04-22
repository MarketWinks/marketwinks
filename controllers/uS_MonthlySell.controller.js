const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const US_MonthlySell = mongoose.model('US_MonthlySell');
//const MonthlySell = mongoose.model('User');

module.exports.uS_MonthlySellProfile = (req, res, next) =>{

    US_MonthlySell.find({}, (err, uS_MonthlySell) => {
        //return res.status(200).json({ status: true, monthlySell: monthlySell});
        console.log("Here we go");
        res.send(uS_MonthlySell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var uS_MonthlySell = new US_MonthlySell();
    uS_MonthlySell.month = "3";
    uS_MonthlySell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
