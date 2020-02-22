const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const HourlySell = mongoose.model('HourlySell');
//const HourlySell = mongoose.model('User');

module.exports.hourlySellProfile = (req, res, next) =>{

    HourlySell.find({}, (err, hourlySell) => {
        //return res.status(200).json({ status: true, hourlySell: hourlySell});
        console.log("Here we go");
        res.send(hourlySell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var hourlySell = new HourlySell();
    hourlySell.month = "3";
    hourlySell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
