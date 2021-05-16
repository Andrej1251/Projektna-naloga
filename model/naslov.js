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
    con.connect(function(err) {
        var sql = "INSERT INTO naslov (Ulica,Hišna_številka,TK_posta) VALUES ('"+data.Ulica+"', '"+data.Hišna_številka+"', '"+data.TK_posta+"')"
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
        var sql = "SELECT * FROM naslov"
        con.query(sql, function (err, result) {
            if (err) throw err
            return result
        });
    });
}
exports.delete=function (id){
    con.connect(function(err) {
        var sql = "DELETE FROM naslov WHERE ID_Naslov="+id+";"
        con.query(sql, function (err, result) {
            if (err) throw err
            return result
        });
    });
}
exports.update=function (data){
    con.connect(function(err) {
        var sql = "UPDATE naslov SET ID_Naslov="+data.ID_Naslov+", Ulica= '"+data.Ulica+"', Hišna_številka='"+data.Hišna_številka+"', TK_posta='"+data.TK_posta+
        "' WHERE ID_Naslov="+data.ID_Naslov+";"
        con.query(sql, function (err, result) {
            if (err) throw err
            return result
        });
    });
}
