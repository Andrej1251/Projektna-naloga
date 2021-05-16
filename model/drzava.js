var con =require ("./connection");
var console = require('console');

exports.ClassDrzava =class Drzava{
    constructor(ID_Država=0,naziv,kartica) {
        this.ID_Država=ID_Država;
        this.naziv=naziv;
        this.kartica=kartica
    }
};
exports.insert =function(data){
    con.connect(function(err) {
        var sql = "INSERT INTO država (Naziv, Kartica) VALUES ('"+data.naziv+"', '"+data.kartica+"')"
        con.query(sql, function (err, result) {
            if (err) throw err
            var sql = "SELECT LAST_INSERT_ID() as data"
            con.query(sql, function (err, result) {
                if (err) throw err
                return result[0].data
            });
        });
    });
}
exports.selectAll =function(){
    con.connect(function(err) {
        var sql = "SELECT * FROM država "
        con.query(sql, function (err, result) {
            if (err) throw err
            return result
        });
    });
}
exports.delete=function (id){
    con.connect(function(err) {
        var sql = "DELETE FROM država WHERE ID_Država="+id+";"
        con.query(sql, function (err, result) {
            if (err) throw err
            return result
        });
    });
}
exports.update=function (data){
    con.connect(function(err) {
        var sql = "UPDATE država SET ID_Država="+data.ID_Država+", Naziv= '"+data.naziv+"', Kartica='"+data.kartica+
        "' WHERE ID_Država="+data.ID_Država+";"
        con.query(sql, function (err, result) {
            if (err) throw err
            return result
        });
    });
}
