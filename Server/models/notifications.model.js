const mongoose = require('mongoose');


const notificationSchema = mongoose.Schema({
    header: { type: String, required: true },
    body: { type: String, required: true },
    type: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
});

module.exports = mongoose.model('notifications', notificationSchema)