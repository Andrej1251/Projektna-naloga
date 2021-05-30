var express = require('express');
var router = express.Router();


var Paket=require('../model/paket');

//insert element
router.post("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Paket.insert(new Paket.ClassPaket(1,obj[0],obj[1],obj[2],obj[3],obj[4],obj[5])))
	} catch (e){
		res.status(404)
		res.send({ error: "Error '[Pošiljatelj,Teža,Cena,Opis,TrenutnaLokacija,TK_Naročila]': "+e })
	}
})
//get all elements
router.get("/", async (req, res) => {
	res.json(await Paket.selectAll())
})
//get fk
router.post("/TK_Narocila", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Paket.get_TK_Naročila(obj[0]))
	} catch (e){
		res.status(404)
		res.send({ error: "Error : "+e })
	}
})
//delete element
router.delete("/:id", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Paket.delete(id))
	} catch (e){
		res.status(404)
		res.send({ error: "Error: [id]"+e })
	}
})
//update
router.patch("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Paket.update(new Paket.ClassPaket(obj[0],obj[1],obj[2],obj[3],obj[4],obj[5],obj[6])))
	} catch (e){
		res.status(404)
		res.send({ error: "Error: '[ID_Paket,Pošiljatelj,Teža,Cena,Opis,TrenutnaLokacija,TK_Naročila]': "+e })
	}
})
module.exports = router;