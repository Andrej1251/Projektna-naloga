var express = require('express');
var router = express.Router();


var Drzava=require('../model/drzava');

//insert element
router.post("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Drzava.insert(new Drzava.ClassDrzava(1,obj[0],obj[1])))
	} catch (e){
		res.status(404)
		res.send({ error: "Error '[drzava,kratica]': "+e })
	}
})
//get all elements
router.get("/", async (req, res) => {
	res.json(await Drzava.selectAll())
})
//delete element
router.delete("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Drzava.delete(obj[0]))
	} catch (e){
		res.status(404)
		res.send({ error: "Error: [id]"+e })
	}
})
//update
router.patch("/", async (req, res) => {
	try{
		var obj = req.body;
		res.send(await Drzava.update(new Drzava.ClassDrzava(obj[0],obj[1],obj[2])))
	} catch (e){
		res.status(404)
		res.send({ error: "Error: '[id,drzava,kratica]': "+e })
	}
})
module.exports = router;