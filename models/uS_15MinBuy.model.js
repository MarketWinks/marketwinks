const mongoose = require('mongoose');

var uS_15MinBuySchema = new mongoose.Schema({
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
    lastBuyEvent: {
        type: String
    },
    lastBuyPrice: {
        type: String
    },
    lastEvent: {
        type: String
    },
    isLastEventBuy: {
        type: String
    },
    lastEventPrice: {
        type: String
    }
});

mongoose.model('US_15MinBuy', uS_15MinBuySchema);