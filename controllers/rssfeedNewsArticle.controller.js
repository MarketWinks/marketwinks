const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const RssfeedNewsArticle = mongoose.model('RssfeedNewsArticle');

module.exports.rssfeedNewsArticleProfile = (req, res, next) =>{

    RssfeedNewsArticle.find({}, (err, rssfeedNewsArticle) => {
        console.log("Here we get");
        res.send(rssfeedNewsArticle);
    }
)};

//testing
module.exports.testentry_buy = (req, res, next) => {
    var rssfeedNewsArticle = new RssfeedNewsArticle();
    rssfeedNewsArticle.month = "4";
    rssfeedNewsArticle.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            
                return next(err);
        }

    });
}
