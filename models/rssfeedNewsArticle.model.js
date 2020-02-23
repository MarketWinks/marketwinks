const mongoose = require('mongoose');

var rssfeedNewsArticleSchema = new mongoose.Schema({
    symbol: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    time: {
        type: String
    },
    url: {
        type: String
    }
});

mongoose.model('RssfeedNewsArticle', rssfeedNewsArticleSchema);