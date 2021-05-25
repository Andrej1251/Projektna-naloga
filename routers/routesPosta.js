var express = require('express');
var router = express.Router();


var Posta=require('../model/posta');

//insert element
router.post("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Posta.insert(new Posta.ClassPosta(1,obj[0],obj[1],obj[2])))
	} catch (e){
		res.status(404)
		res.send({ error: "Error '[Kraj,PoštnaStevilka,TK_Drzava]': "+e })
	}
})
//get all elements
router.get("/", async (req, res) => {
	res.json(await Posta.selectAll())
})
//delete element
router.delete("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Posta.delete(obj[0]))
	} catch (e){
		res.status(404)
		res.send({ error: "Error: [id]"+e })
	}
})
//update
router.patch("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Posta.update(new Posta.ClassPosta(obj[0],obj[1],obj[2],obj[3])))
	} catch (e){
		res.status(404)
		res.send({ error: "Error: '[ID_pošta,Kraj,PoštnaStevilka,TK_Drzava]': "+e })
	}
})
module.exports = router;