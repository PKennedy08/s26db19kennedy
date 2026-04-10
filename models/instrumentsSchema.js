const mongoose = require("mongoose");

const instrumentSchema = new mongoose.Schema({
    name: String,
    type: String,
    price: Number
});

module.exports = mongoose.model("Instrument", instrumentSchema);