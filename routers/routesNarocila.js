var express = require('express');
var router = express.Router();


var Narocila=require('../model/narocilo');

//insert element
router.post("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Narocila.insert(new Narocila.ClassNarocila(1,obj[0],obj[1],obj[2],obj[3],obj[4])))
	} catch (e){
		res.status(404)
		res.send({ error: "Error '[TK_Uporabnik,TK_Naslov_posiljatelja,Active,DatumPrejetja,DatumPoslanosti]': "+e })
	}
})
//get all elements
router.get("/", async (req, res) => {
	res.json(await Narocila.selectAll())
})
//delete element
router.delete("/:id", async (req, res) => {
	try{
		res.send(await Narocila.delete(id))
	} catch (e){
		res.status(404)
		res.send({ error: "Error: [id]"+e })
	}
})
//update
router.patch("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Narocila.update(new Narocila.ClassNarocila(obj[0],obj[1],obj[2],obj[3],obj[4],obj[5])))
	} catch (e){
		res.status(404)
		res.send({ error: "Error: '[ID_Naročila,TK_Uporabnik,TK_Naslov_posiljatelja,Active,DatumPrejetja,DatumPoslanosti]': "+e })
	}
})
module.exports = router;