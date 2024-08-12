const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    tittle:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    ticketsAvailable:{
        type: Number,
        required: true
    },
    ticketsSold:{
        type: Number,
        default: 0
    },
    feedback:[{
        user: String,
        comment: String
    }]
});

module.exports = mongoose.model("Event", EventSchema);