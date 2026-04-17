
var Instrument = require('../models/instrumentsSchema');

// Part 5 - return JSON
exports.instrument_list = async function(req, res) {
  try {
    var theInstruments = await Instrument.find();
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
        res.status(500)
        res.send(`Error retrieving item: ${err}`);
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
        console.log("delete " + req.params.id)
        try {
            result = await Instrument.findByIdAndDelete( req.params.id)
            console.log("Removed " + result)
            res.send(result)
        } catch (err) {
            res.status(500)
            res.send(`{"error": Error deleting ${err}}`);
        }
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
exports.costume_view_one_Page = async function (req, res) {
  console.log("single view for id " + req.query.id);

  try {
    let result = await Instrument.findById(req.query.id);

    res.render('instrumentdetail', {
      title: 'Intrument Detail',
      toShow: result
    });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};
exports.instrument_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await Intrument.findById(req.query.id)
res.render('instrumentupdate', { title: 'instrument Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};