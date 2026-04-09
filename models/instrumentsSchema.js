const mongoose = require("mongoose")
const intrumentsSchema = mongoose.Schema({
    name: String,
    type: String,
    price: Number
});
module.exports = mongoose.model("Intruments",
intrumentsSchemaSchema)
