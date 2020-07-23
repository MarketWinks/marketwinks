const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const UK_LSE_HourlySell = mongoose.model('UK_LSE_HourlySell');
//const HourlySell = mongoose.model('User');

module.exports.uK_LSE_HourlySellProfile = (req, res, next) =>{

    UK_LSE_HourlySell.find({},null,{sort: {lastSellEvent:-1}}, (err, uK_LSE_HourlySell) => {
        //return res.status(200).json({ status: true, hourlySell: hourlySell});
        console.log("Here we go");
        res.send(uK_LSE_HourlySell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var uK_LSE_HourlySell = new UK_LSE_HourlySell();
    uK_LSE_HourlySell.month = "3";
    uK_LSE_HourlySell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
