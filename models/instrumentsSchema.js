const mongoose = require("mongoose");

const instrumentsSchema = mongoose.Schema({
    name: String,
    type: String,
    price: Number
});

module.exports = mongoose.model("Instrument", instrumentsSchema);