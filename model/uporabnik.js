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
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            var sql = "INSERT INTO uporabnik (Ime,Priimek,Uporabniško_ime,Geslo,TK_Naslov) VALUES ('"+data.Ime+"', '"+data.Priimek+"', '"+data.Uporabniško_ime+"', '"+data.Geslo+"', '"+data.TK_Naslov+"')"
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
            var sql = "SELECT * FROM uporabnik"
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
            var sql = "DELETE FROM uporabnik WHERE ID_Uporabnik="+id+";"
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
            var sql = "UPDATE uporabnik SET ID_Uporabnik="+data.ID_Uporabnik+", Ime= '"+data.Ime+"', Priimek='"+data.Priimek+"', Uporabniško_ime='"+Uporabniško_ime+"', Geslo='"+Geslo+"', TK_Naslov='"+TK_Naslov+
            "' WHERE ID_Uporabnik="+data.ID_Uporabnik+";"
            con.query(sql, function (err, result) {
                if (err) return(reject(err))
                return resolve(result)
            });
        });
    })
}
