const http = require('http');
const express = require('express')
const path = require('path')
var console = require('console');


var Datum=require('./model/datum');
var Drzava=require('./model/drzava');
var Narocila=require('./model/narocilo');
var Naslov=require('./model/naslov');
var Paket=require('./model/paket');
var Posta=require('./model/posta');
var Uporabnik=require('./model/uporabnik');


const app = express()
app.use('/',express.static(path.join(__dirname,'views')))
app.use (express.json())

app.post("/api/datum", async (req,res)=>{
    try{
        var obj = req.body;
        if(obj.insert){
            res.json(Datum.insert(new Datum.ClassDatum(1,obj.insert[0],obj.insert[1])))
        }
        else if(obj.selectAll){
            res.json(Datum.selectAll())
        }
        else if(obj.delete){
            res.json(Datum.delete(obj.delete[0]))
        }
        else if(obj.update){
            res.json(Datum.update(new Datum.ClassDatum(obj.update[0],obj.update[1],obj.update[2])))
        }
        else{
            throw('example-> {"insert":["1.1.2012","1.1.2012"]} <-->{"update":[3,"1.4.2018","1.4.2018"]}')
        }
    }
    catch(test){
        
        res.json("Faled specification: "+test);
    }
})
app.post("/api/drzava", async (req,res)=>{
    try{
        var obj = req.body;
        if(obj.insert){
            res.json(Drzava.insert(new Drzava.ClassDrzava(1,obj.insert[0],obj.insert[1])))
        }
        else if(obj.selectAll){
            res.json(Drzava.selectAll())
        }
        else if(obj.delete){
            res.json(Drzava.delete(obj.delete[0]))
        }
        else if(obj.update){
            res.json(Drzava.update(new Drzava.ClassDrzava(obj.update[0],obj.update[1],obj.update[2])))
        }
        else{
            throw('example-> {"insert":["1.1.2012","1.1.2012"]} <-->{"update":[3,"1.4.2018","1.4.2018"]}')
        }
    }
    catch(test){
        
        res.json("Faled specification: "+test);
    }
})
app.post("/api/naslov", async (req,res)=>{
    try{
        var obj = req.body;
        if(obj.insert){
            res.json(Naslov.insert(new Naslov.ClassNaslov(1,obj.insert[0],obj.insert[1],obj.insert[2])))
        }
        else if(obj.selectAll){
            res.json(Naslov.selectAll())
        }
        else if(obj.delete){
            res.json(Naslov.delete(obj.delete[0]))
        }
        else if(obj.update){
            res.json(Naslov.update(new Naslov.ClassNaslov(obj.update[0],obj.update[1],obj.update[2],obj.insert[3])))
        }
        else{
            throw('example-> {"insert":["1.1.2012","1.1.2012"]} <-->{"update":[3,"1.4.2018","1.4.2018"]}')
        }
    }
    catch(test){
        
        res.json("Faled specification: "+test);
    }
})
app.post("/api/paket", async (req,res)=>{
    try{
        var obj = req.body;
        if(obj.insert){
            res.json(Paket.insert(new Paket.ClassPaket(1,obj.insert[0],obj.insert[1],obj.insert[2])))
        }
        else if(obj.selectAll){
            res.json(Paket.selectAll())
        }
        else if(obj.delete){
            res.json(Paket.delete(obj.delete[0]))
        }
        else if(obj.update){
            res.json(Paket.update(new Paket.ClassPaket(obj.update[0],obj.update[1],obj.update[2],obj.insert[3])))
        }
        else{
            throw('example-> {"insert":["1.1.2012","1.1.2012"]} <-->{"update":[3,"1.4.2018","1.4.2018"]}')
        }
    }
    catch(test){
        
        res.json("Faled specification: "+test);
    }
})
app.post("/api/posta", async (req,res)=>{
    try{
        var obj = req.body;
        if(obj.insert){
            res.json(Posta.insert(new Posta.ClassPosta(1,obj.insert[0],obj.insert[1],obj.insert[2])))
        }
        else if(obj.selectAll){
            res.json(Posta.selectAll())
        }
        else if(obj.delete){
            res.json(Posta.delete(obj.delete[0]))
        }
        else if(obj.update){
            res.json(Posta.update(new Posta.ClassPosta(obj.update[0],obj.update[1],obj.update[2],obj.insert[3])))
        }
        else{
            throw('example-> {"insert":["1.1.2012","1.1.2012"]} <-->{"update":[3,"1.4.2018","1.4.2018"]}')
        }
    }
    catch(test){
        
        res.json("Faled specification: "+test);
    }
})
app.post("/api/narocila", async (req,res)=>{
    try{
        var obj = req.body;
        if(obj.insert){
            res.json(Narocila.insert(new Narocila.ClassNarocila(1,obj.insert[0],obj.insert[1],obj.insert[2],obj.insert[3])))
        }
        else if(obj.selectAll){
            res.json(Narocila.selectAll())
        }
        else if(obj.delete){
            res.json(Narocila.delete(obj.delete[0]))
        }
        else if(obj.update){
            res.json(Narocila.update(new Narocila.ClassNarocila(obj.update[0],obj.update[1],obj.update[2],obj.insert[3],obj.insert[4])))
        }
        else{
            throw('example-> {"insert":["1.1.2012","1.1.2012"]} <-->{"update":[3,"1.4.2018","1.4.2018"]}')
        }
    }
    catch(test){
        
        res.json("Faled specification: "+test);
    }
})
app.post("/api/uporabnik", async (req,res)=>{
    try{
        var obj = req.body;
        if(obj.insert){
            res.json(Uporabnik.insert(new Uporabnik.ClassUporabnik(1,obj.insert[0],obj.insert[1],obj.insert[2],obj.insert[3],obj.insert[4])))
        }
        else if(obj.selectAll){
            res.json(Uporabnik.selectAll())
        }
        else if(obj.delete){
            res.json(Uporabnik.delete(obj.delete[0]))
        }
        else if(obj.update){
            res.json(Uporabnik.update(new Uporabnik.ClassUporabnik(obj.update[0],obj.update[1],obj.update[2],obj.insert[3],obj.insert[4],obj.insert[5])))
        }
        else{
            throw('example-> {"insert":["1.1.2012","1.1.2012"]} <-->{"update":[3,"1.4.2018","1.4.2018"]}')
        }
    }
    catch(test){
        
        res.json("Faled specification: "+test);
    }
})

app.listen(3000,()=>{
    console.log('server is working')
})

