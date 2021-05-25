var express = require('express');
var router = express.Router();


var Uporabnik=require('../model/uporabnik');

//insert element
router.post("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Uporabnik.insert(new Uporabnik.ClassUporabnik(1,obj[0],obj[1],obj[2],obj[3],obj[4])))
	} catch (e){
		res.status(404)
		res.send({ error: "Error '[Ime,Priimek,Uporabniško_ime,Geslo,TK_Naslov]': "+e })
	}
})
//get all elements
router.get("/", async (req, res) => {
	res.json(await Uporabnik.selectAll())
})
//delete element
router.delete("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Uporabnik.delete(obj[0]))
	} catch (e){
		res.status(404)
		res.send({ error: "Error: [id]"+e })
	}
})
//update
router.patch("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Uporabnik.update(new Uporabnik.ClassUporabnik(obj[0],obj[1],obj[2],obj[3],obj[4],obj[5])))
	} catch (e){
		res.status(404)
		res.send({ error: "Error: '[ID_Uporabnik,Ime,Priimek,Uporabniško_ime,Geslo,TK_Naslov]': "+e })
	}
})
module.exports = router;