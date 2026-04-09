var express = require('express');
var router = express.Router();

const mongoose = require("mongoose")
const intrumentsSchema = mongoose.Schema({
costume_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("Intruments",
intrumentsSchemaSchema)

router.get('/', function(req, res, next) {
  res.render('instruments', { title: 'Search Results Instruments' });
});

module.exports = router;