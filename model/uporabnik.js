var con =require ("./connection");
var console = require('console');

exports.ClassUporabnik =class Uporabnik{
    constructor(ID_Uporabnik,Ime,Priimek,Uporabniško_ime,Geslo,TK_Naslov,DatumPreklica,Tip_uporabnika,Email) {
        this.ID_Uporabnik=ID_Uporabnik;
        this.Ime=Ime;
        this.Priimek=Priimek;
        this.Uporabniško_ime=Uporabniško_ime;
        this.Geslo=Geslo;
        this.TK_Naslov=TK_Naslov;
        this.DatumPreklica=DatumPreklica;
        this.Tip_uporabnika=Tip_uporabnika;
        this.Email=Email;
    }
};
exports.insert =function(data){
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            if(data.DatumPreklica!=="")
                var sql = "INSERT INTO uporabnik (Ime,Priimek,Uporabniško_ime,Geslo,TK_Naslov,DatumPreklica,Tip_uporabnika,Email) VALUES ('"+data.Ime+"', '"+data.Priimek+"', '"+data.Uporabniško_ime+"', '"+data.Geslo+"', "+data.TK_Naslov+", '"+data.DatumPreklica+"', "+data.Tip_uporabnika+", '"+data.Email+"')"
            else
                var sql = "INSERT INTO uporabnik (Ime,Priimek,Uporabniško_ime,Geslo,TK_Naslov,Tip_uporabnika,Email) VALUES ('"+data.Ime+"', '"+data.Priimek+"', '"+data.Uporabniško_ime+"', '"+data.Geslo+"', "+data.TK_Naslov+", "+data.Tip_uporabnika+"', '"+data.Email+"')"

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
                return resolve("true")
            });
        });
    })
}
exports.checkEmail=function(id){
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            var sql = "SELECT * FROM uporabnik where Email='"+id+"';"
            con.query(sql, function (err, result) {
                if (err) return(reject("false"))
                if(typeof result[0] !== 'undefined')return resolve("true")
                return resolve("false")
            });
        });
    })
}

exports.getElByID =function(id){
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            var sql = "SELECT * FROM uporabnik WHERE ID_Uporabnik="+id+";"
            con.query(sql, function (err, result) {
                if (err) return(reject(err))
                return resolve(result)
            });
        });
    })
}

exports.find = function (username,password){
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            var sql = "SELECT * FROM uporabnik where Uporabniško_ime='"+username+"' and Geslo='"+password+"';"
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
            var sql = "UPDATE uporabnik SET ID_Uporabnik="+data.ID_Uporabnik+", Ime= '"+data.Ime+"', Priimek='"+data.Priimek+"', Uporabniško_ime='"+data.Uporabniško_ime+"', Geslo='"+data.Geslo+"', TK_Naslov='"+data.TK_Naslov+"', DatumPreklica='"+data.DatumPreklica+"', Tip_uporabnika='"+data.Tip_uporabnika+"', Email='"+data.Email+
            "' WHERE ID_Uporabnik="+data.ID_Uporabnik+";"
            con.query(sql, function (err, result) {
                if (err) return(reject(err))
                return resolve(result)
            });
        });
    })
}
