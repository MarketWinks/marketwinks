const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const UK_LSE_MonthlySell = mongoose.model('UK_LSE_MonthlySell');
//const MonthlySell = mongoose.model('User');

module.exports.uK_LSE_MonthlySellProfile = (req, res, next) =>{

    UK_LSE_MonthlySell.find({},null,{sort: {lastSellEvent:-1}}, (err, uK_LSE_MonthlySell) => {
        //return res.status(200).json({ status: true, monthlySell: monthlySell});
        console.log("Here we go");
        res.send(uK_LSE_MonthlySell);
    }
)};

//testing
module.exports.testentry = (req, res, next) => {
    var uK_LSE_MonthlySell = new UK_LSE_MonthlySell();
    uK_LSE_MonthlySell.month = "3";
    uK_LSE_MonthlySell.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
