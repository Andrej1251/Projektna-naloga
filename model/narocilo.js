var con =require ("./connection");
var console = require('console');

exports.ClassNarocila =class Narocila {
    constructor(ID_Naročila,TK_Uporabnik,TK_Naslov_posiljatelja,Active,DatumPrejetja,DatumPoslanosti) {
        this.ID_Naročila=ID_Naročila;
        this.TK_Uporabnik=TK_Uporabnik;
        this.TK_Naslov_posiljatelja=TK_Naslov_posiljatelja;
        this.Active=Active;
        this.DatumPrejetja=DatumPrejetja;
        this.DatumPoslanosti=DatumPoslanosti;
    }
};
exports.insert =function(data){
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            var sql = "INSERT INTO naročila (TK_Uporabnik,TK_Naslov_posiljatelja,Active,DatumPrejetja,DatumPoslanosti) VALUES ("+data.TK_Uporabnik+", "+data.TK_Naslov_posiljatelja+", "+data.Active+", '"+data.DatumPrejetja+"', '"+data.DatumPoslanosti+"')"
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
            var sql = "UPDATE naročila SET ID_Naročila="+data.ID_Naročila+", TK_Uporabnik= '"+data.TK_Uporabnik+"', TK_Naslov_posiljatelja='"+data.TK_Naslov_posiljatelja+"', Active='"+data.Active+"', TK_Naslov_posiljatelja='"+data.DatumPrejetja+"', TK_Naslov_posiljatelja='"+data.DatumPrejetja+
            "' WHERE ID_Naročila="+data.ID_Naročila+" and TK_Uporabnik = '"+data.TK_Uporabnik+"' and TK_Naslov_posiljatelja = '"+data.TK_Naslov_posiljatelja+"';"
            con.query(sql, function (err, result) {
                if (err) return(reject(err))
                return resolve(result)
            });
        });
    })
}
