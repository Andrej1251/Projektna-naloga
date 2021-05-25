const http = require('http');
const express = require('express')
const path = require('path')
var console = require('console');
const routesDatum = require("./routers/routesDatum")
const routesDrzava = require("./routers/routesDrzava")
const routesNarocila = require("./routers/routesNarocila")
const routesNaslov = require("./routers/routesNaslov")
const routesPaket = require("./routers/routesPaket")
const routesPosta = require("./routers/routesPosta")
const routesUporabnik = require("./routers/routesUporabnik")


const app = express()
app.use('/',express.static(path.join(__dirname,'views')))
app.use (express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH, OPTIONS');

    next();
});
app.use('/datum', routesDatum );
app.use('/drzava', routesDrzava );

app.listen(3000,()=>{
    console.log('server is working')
})

