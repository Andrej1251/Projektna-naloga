var express = require('express');
var router = express.Router();


var Paket=require('../model/paket');

//insert element
router.post("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Paket.insert(new Paket.ClassPaket(1,obj[0],obj[1],obj[2])))
	} catch (e){
		res.status(404)
		res.send({ error: "Error '[Pošiljatelj,Teža,Cena]': "+e })
	}
})
//get all elements
router.get("/", async (req, res) => {
	res.json(await Paket.selectAll())
})
//delete element
router.delete("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Paket.delete(obj[0]))
	} catch (e){
		res.status(404)
		res.send({ error: "Error: [id]"+e })
	}
})
//update
router.patch("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Paket.update(new Paket.ClassPaket(obj[0],obj[1],obj[2],obj[3])))
	} catch (e){
		res.status(404)
		res.send({ error: "Error: '[ID_Paket,Pošiljatelj,Teža,Cena]': "+e })
	}
})
module.exports = router;