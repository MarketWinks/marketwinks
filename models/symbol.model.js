const mongoose = require('mongoose');

var symbolSchema = new mongoose.Schema({
    symbol: {
        type: String
    },
    type: {
        type: String
    },
    exchange: {
        type: String
    },
    name: {
        type: String
    },
    profile: {
        type: String
    },
    fundamentals: {
        type: String
    },
    publicsentiment: {
        type: String
    }
});

mongoose.model('symbol', symbolSchema);