const mongoose = require('mongoose');

var watchlistSchema = new mongoose.Schema({
    table: {
        type: String
    },
    id: {
        type: String
    },
    user: {
        type: String
    },
    status: {
        type: String
    }
});

mongoose.model('Watchlist', watchlistSchema);