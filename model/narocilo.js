var con =require ("./connection");
var console = require('console');

exports.ClassNarocila =class Narocila {
    constructor(ID_Naročila,TK_Uporabnik,TK_Paket,TK_Datum,TK_Naslov_posiljatelja) {
        this.ID_Naročila=ID_Naročila;
        this.TK_Uporabnik=TK_Uporabnik;
        this.TK_Paket=TK_Paket;
        this.TK_Datum=TK_Datum;
        this.TK_Naslov_posiljatelja=TK_Naslov_posiljatelja;
    }
};
exports.insert =function(data){
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            var sql = "INSERT INTO naročila (TK_Uporabnik,TK_Paket,TK_Datum,TK_Naslov_posiljatelja) VALUES ('"+data.TK_Uporabnik+"', '"+data.TK_Paket+"', '"+data.TK_Datum+"', '"+data.TK_Naslov_posiljatelja+"')"
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
            var sql = "SELECT * FROM naročila"
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
            var sql = "DELETE FROM naročila WHERE ID_Naročila="+id+";"
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
            var sql = "UPDATE uporabnik SET ID_Naročila="+data.ID_Naročila+", TK_Uporabnik= '"+data.TK_Uporabnik+"', TK_Paket='"+data.TK_Paket+"', TK_Datum='"+TK_Datum+"', TK_Naslov_posiljatelja='"+TK_Naslov_posiljatelja+
            "' WHERE ID_Naročila="+data.ID_Naročila+";"
            con.query(sql, function (err, result) {
                if (err) return(reject(err))
                return resolve(result)
            });
        });
    })
}
