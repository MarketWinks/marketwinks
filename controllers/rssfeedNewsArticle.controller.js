const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const RssfeedNewsArticle = mongoose.model('RssfeedNewsArticle');

module.exports.rssfeedNewsArticleProfile = (req, res, next) =>{

    console.log("trying to reach rssfeed");
  
    //RssfeedNewsArticle.find({}).sort({"_id": -1}).limit(100, (err, rssfeedNewsArticle) => {
        RssfeedNewsArticle.find({},null,{sort: {time: -1}, limit: 20}, (err, rssfeedNewsArticle) => {
        if (err){
            console.log(err);
            res.send(err);
        
        } else {
        //rssfeedNewsArticle = rssfeedNewsArticle.slice(0,20);
        console.log("Here we get");
        res.send(rssfeedNewsArticle);
    }
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
