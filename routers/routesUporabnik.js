var express = require('express');
var router = express.Router();


var Uporabnik=require('../model/uporabnik');

//insert element
router.post("/", async (req, res) => {
	try{
		var obj = req.body;
		res.json(await Uporabnik.insert(new Uporabnik.ClassUporabnik(1,obj[0],obj[1],obj[2],obj[3],obj[4],obj[5],obj[6],obj[7])))
	} catch (e){
		res.status(404)
		res.json({ error: "Error null val= '' and '[Ime,Priimek,Uporabniško_ime,Geslo,TK_Naslov,DatumPreklica,Tip_uporabnika,Email]': "+e })
	}
})
//get all elements
router.get("/", async (req, res) => {
	res.json(await Uporabnik.selectAll())
})
//find one user using Uporabniško_ime,Geslo
router.post("/find", async (req, res) => {
	var obj = req.body;
	res.json(await Uporabnik.find(obj[0],obj[1]))
})

//check user
router.post("/checkUser", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Uporabnik.checkEmail(obj[0]))
	} catch (e){
		res.status(404)
		res.json({ error: "Error: "+e })
	}
})
//get element by id
router.post("/id", async (req, res) => {
	try{
		var obj = req.body;
		res.json(await Uporabnik.getElByID(obj))
	} catch (e){
		res.status(404)
		res.json({ error: "Error : "+e })
	}
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
		res.send(await Uporabnik.update(new Uporabnik.ClassUporabnik(obj[0],obj[1],obj[2],obj[3],obj[4],obj[5],obj[6],obj[7],obj[8])))
	} catch (e){
		res.status(404)
		res.send({ error: "Error: '[ID_Uporabnik,Ime,Priimek,Uporabniško_ime,Geslo,TK_Naslov,DatumPreklica,Tip_uporabnika,Email]': "+e })
	}
})
module.exports = router;