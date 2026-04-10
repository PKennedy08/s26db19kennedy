var Instrument = require('../models/instrument');

// GET one
exports.instrument_detail = async function(req, res) {
    try {
        const result = await Instrument.findById(req.params.id);
        res.send(result);
    } catch (error) {
        res.status(500).send({ error: "Error retrieving instrument" });
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