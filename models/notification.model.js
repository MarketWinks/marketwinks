const mongoose = require('mongoose');

var notificationSchema = new mongoose.Schema({
    targetuser: {
        type: String
    },
    time: {
        type: String
    },
    message: {
        type: String
    },
    isRead: {
        type: Boolean
    }
});

mongoose.model('Notification', notificationSchema);