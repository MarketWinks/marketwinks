const mongoose = require('mongoose');

var weeklySellSchema = new mongoose.Schema({
    month: {
        type: String
    },
    year: {
        type: String
    },
    company: {
        type: String
    },
    indicator: {
        type: String
    },
    confidence_level: {
        type: String
    },
    lastSellEvent: {
        type: String
    },
    lastSellPrice: {
        type: String
    },
    lastEvent: {
        type: String
    },
    isLastEventSell: {
        type: String
    },
    lastEventPrice: {
        type: String
    }
});

mongoose.model('WeeklySell', weeklySellSchema);