const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const WeeklySell = mongoose.model('WeeklySell');
//const WeeklySell = mongoose.model('User');

module.exports.weeklySellProfile = (req, res, next) =>{

    WeeklySell.find({}, (err, weeklySell) => {
        //return res.status(200).json({ status: true, weeklySell: weeklySell});
        console.log("Here we go");
        res.send(weeklySell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var weeklySell = new WeeklySell();
    weeklySell.month = "3";
    weeklySell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
