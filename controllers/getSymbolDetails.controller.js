const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Symbol = mongoose.model('symbol');

module.exports.getSymbolDetailsProfile = (req, res, next) =>{

    console.log("came to ootha symbol controller");
    console.log(req.body);
    
    Symbol.find({symbol:req.body.symbol}, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)


};

