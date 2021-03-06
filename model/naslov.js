var con =require ("./connection");
var console = require('console');

exports.ClassNaslov =class Naslov {
    constructor(ID_Naslov,Ulica,Hišna_številka,TK_posta) {
        this.ID_Naslov=ID_Naslov;
        this.Ulica=Ulica;
        this.Hišna_številka=Hišna_številka;
        this.TK_posta=TK_posta;
    }
};
exports.insert =function(data){
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            var sql = "INSERT INTO naslov (Ulica,Hišna_številka,TK_posta) VALUES ('"+data.Ulica+"', '"+data.Hišna_številka+"', '"+data.TK_posta+"')"
            con.query(sql, function (err, result) {
                if (err) return reject(err)
                return resolve(result)
            });
        });
    })
}
exports.selectAll =function(){
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            var sql = "SELECT * FROM naslov"
            con.query(sql, function (err, result) {
                if (err) return(reject(err))
                return resolve(result)
            });
        });
    })
}

exports.getElementById =function(id){
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            var sql = "SELECT * FROM naslov WHERE ID_Naslov="+id+";"
            con.query(sql, function (err, result) {
                if (err) return(reject(err))
                return resolve(result)
            });
        });
    })
}
exports.select_FK_posta =function(id){
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            var sql = "SELECT * FROM naslov WHERE TK_posta="+id+";"
            con.query(sql, function (err, result) {
                if (err) return(reject(err))
                return resolve(result)
            });
        });
    })
}
exports.delete=function (id){
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            var sql = "DELETE FROM naslov WHERE ID_Naslov="+id+";"
            con.query(sql, function (err, result) {
                if (err) return(reject(err))
                return resolve(result)
            });
        });
    })
}
exports.update=function (data){
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            var sql = "UPDATE naslov SET ID_Naslov="+data.ID_Naslov+", Ulica= '"+data.Ulica+"', Hišna_številka='"+data.Hišna_številka+"', TK_posta='"+data.TK_posta+
            "' WHERE ID_Naslov="+data.ID_Naslov+";"
            con.query(sql, function (err, result) {
                if (err) return(reject(err))
                return resolve(result)
            });
        });
    })
}
