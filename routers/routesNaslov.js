var express = require('express');
var router = express.Router();


var Naslov=require('../model/naslov');

//insert element
router.post("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Naslov.insert(new Naslov.ClassNaslov(1,obj[0],obj[1],obj[2])))
	} catch (e){
		res.status(404)
		res.send({ error: "Error '[Ulica,Hišna_številka,TK_posta]': "+e })
	}
})
//get all elements
router.get("/", async (req, res) => {
	res.json(await Naslov.selectAll())
})
//get fk element
router.post("/TK_posta", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Naslov.select_FK_posta(obj[0]))
	} catch (e){
		res.status(404)
		res.send({ error: "Error '[id]': "+e })
	}
})
//get element by id
router.post("/id", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Naslov.getElementById(obj[0]))
	} catch (e){
		res.status(404)
		res.send({ error: "Error '[id]': "+e })
	}
})
//delete element
router.delete("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Naslov.delete(obj[0]))
	} catch (e){
		res.status(404)
		res.send({ error: "Error: [id]"+e })
	}
})
//update
router.patch("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Naslov.update(new Naslov.ClassNaslov(obj[0],obj[1],obj[2],obj[3])))
	} catch (e){
		res.status(404)
		res.send({ error: "Error: '[ID_Naslov,Ulica,Hišna_številka,TK_posta]': "+e })
	}
})
module.exports = router;