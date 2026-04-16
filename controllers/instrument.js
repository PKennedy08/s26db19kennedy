
var Instrument = require('../models/instrumentsSchema');

// Part 5 - return JSON
exports.instrument_list = async function(req, res) {
  try {
    var theInstruments = await Instruments.find();
    res.send(theInstruments);
  } catch (err) {
    res.status(500)
    res.send(`{"error": "${err}"}`);
  }
};
// UPDATE
exports.instrument_detail = async function(req, res) {
    try {
        let result = await Instrument.findById(req.params.id);
        if (!result) {
            res.status(404).send("No item found with that ID");
        } else {
            res.send(result);
        }
    } catch (err) {
        res.status(500).send(`Error retrieving item: ${err}`);
    }
};
exports.instrument_create_post = async function(req, res){
    console.log(req.body)
    let document = new Instrument();
    document.name = req.body.name;
    document.type = req.body.type;
    document.price = req.body.price;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500)
        res.send(`{"error":${err}}`);
    }
}
exports.instrument_update = async function(req, res) {
    console.log("body:", req.body);
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Instrument.findById(req.params.id);

        if (req.body.name) toUpdate.name = req.body.name;
        if (req.body.type) toUpdate.type = req.body.type;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Success " + result)
        res.send(result)

        await toUpdate.save();
        res.send(toUpdate);
    } catch (error) {
        res.status(500)
        res.send(`{"Error updating instrument" ${error}: Update for id ${req.params.id} failed`);
    }
};

// DELETE
exports.instrument_delete = async function(req, res) {
    res.send('Not Implemented: Instrument delete ' + req.params.id);
    
};
exports.instrument_view_all_Page = async function (req, res) {
    try{
        theInstruments = await Instrument.find();
        res.render(`instrument`, {title: 'instrument search results', results: theInstruments});
        
    }
    catch(err){
        res.status(500);
        res.send(`{"error":${err}}`);
    }
}
