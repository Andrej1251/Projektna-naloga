const http = require('http');
const express = require('express')
const path = require('path')
var console = require('console');

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
app.use('/drzava', routesDrzava );
app.use('/narocila', routesNarocila );
app.use('/naslov', routesNaslov);
app.use('/paket', routesPaket );
app.use('/posta', routesPosta );
app.use('/uporabnik', routesUporabnik );

app.listen(5000,()=>{
    console.log('server is working')
})

