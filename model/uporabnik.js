var con =require ("./connection");
var console = require('console');

exports.ClassUporabnik =class Uporabnik{
    constructor(ID_Uporabnik,Ime,Priimek,Uporabniško_ime,Geslo,TK_Naslov) {
        this.ID_Uporabnik=ID_Uporabnik;
        this.Ime=Ime;
        this.Priimek=Priimek;
        this.Uporabniško_ime=Uporabniško_ime;
        this.Geslo=Geslo;
        this.TK_Naslov=TK_Naslov;
    }
};
exports.insert =function(data){
    con.connect(function(err) {
        var sql = "INSERT INTO uporabnik (Ime,Priimek,Uporabniško_ime,Geslo,TK_Naslov) VALUES ('"+data.Ime+"', '"+data.Priimek+"', '"+data.Uporabniško_ime+"', '"+data.Geslo+"', '"+data.TK_Naslov+"')"
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
        var sql = "SELECT * FROM uporabnik"
        con.query(sql, function (err, result) {
            if (err) throw err
            return result
        });
    });
}
exports.delete=function (id){
    con.connect(function(err) {
        var sql = "DELETE FROM uporabnik WHERE ID_Uporabnik="+id+";"
        con.query(sql, function (err, result) {
            if (err) throw err
            return result
        });
    });
}
exports.update=function (data){
    con.connect(function(err) {
        var sql = "UPDATE uporabnik SET ID_Uporabnik="+data.ID_Uporabnik+", Ime= '"+data.Ime+"', Priimek='"+data.Priimek+"', Uporabniško_ime='"+Uporabniško_ime+"', Geslo='"+Geslo+"', TK_Naslov='"+TK_Naslov+
        "' WHERE ID_Uporabnik="+data.ID_Uporabnik+";"
        con.query(sql, function (err, result) {
            if (err) throw err
            return result
        });
    });
}
