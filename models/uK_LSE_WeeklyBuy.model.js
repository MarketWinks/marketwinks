const mongoose = require('mongoose');

var uK_LSE_WeeklyBuySchema = new mongoose.Schema({
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

mongoose.model('UK_LSE_WeeklyBuy', uK_LSE_WeeklyBuySchema);