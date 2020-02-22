const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const MonthlySell = mongoose.model('MonthlySell');
//const MonthlySell = mongoose.model('User');

module.exports.monthlySellProfile = (req, res, next) =>{

    MonthlySell.find({}, (err, monthlySell) => {
        //return res.status(200).json({ status: true, monthlySell: monthlySell});
        console.log("Here we go");
        res.send(monthlySell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var monthlySell = new MonthlySell();
    monthlySell.month = "3";
    monthlySell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
