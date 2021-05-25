var express = require('express');
var router = express.Router();

var Datum=require('../model/datum');
var Drzava=require('../model/drzava');
var Narocila=require('../model/narocilo');
var Naslov=require('../model/naslov');
var Paket=require('../model/paket');
var Posta=require('../model/posta');
var Uporabnik=require('../model/uporabnik');

//insert element
router.post("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Datum.insert(new Datum.ClassDatum(1,obj[0],obj[1])))
	} catch (e){
		res.status(404)
		res.send({ error: "Error '['yyyy.m.d','yyyy.m.d']': "+e })
	}
})
//get all elements
router.get("/", async (req, res) => {
	res.json(await Datum.selectAll())
})
//delete element
router.delete("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Datum.delete(obj[0]))
	} catch (e){
		res.status(404)
		res.send({ error: "Error: [id]"+e })
	}
})
//update
router.patch("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Datum.update(new Datum.ClassDatum(obj[0],obj[1],obj[2])))
	} catch (e){
		res.status(404)
		res.send({ error: "Error: [id,'yyyy.m.d','yyyy.m.d']"+e })
	}
})
module.exports = router;