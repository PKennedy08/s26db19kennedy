var Instrument = require('../models/instrumentsSchema');
var Instrument = require('../controllers/instrument');

// GET one
// List of all Costumes
exports.intrument_list = async function(req, res) {
    try {
        // We use await to wait for the find() operation to complete in MongoDB
        const theinstruments = await Intrument.find(); 
        
        // If successful, send the array of documents as JSON
        res.send(theinstruments); 
    }
    catch(err) {
        // If the database call fails, return a 500 server error
        res.status(500);
        res.send(`{"error": ${err}}`); 
    }
};

// UPDATE
exports.instrument_update = async function(req, res) {
    try {
        let toUpdate = await Instrument.findById(req.params.id);

        if (req.body.name) toUpdate.name = req.body.name;
        if (req.body.type) toUpdate.type = req.body.type;
        if (req.body.price) toUpdate.price = req.body.price;

        await toUpdate.save();
        res.send(toUpdate);
    } catch (error) {
        res.status(500).send({ error: "Error updating instrument" });
    }
};

// DELETE
exports.instrument_delete = async function(req, res) {
    try {
        const result = await Instrument.findByIdAndDelete(req.params.id);
        res.send(result);
    } catch (error) {
        res.status(500).send({ error: "Error deleting instrument" });
    }
};
