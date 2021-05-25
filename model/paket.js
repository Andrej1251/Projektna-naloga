var con =require ("./connection");
var console = require('console');

exports.ClassPaket =class Paket{
    constructor(id_Paket,Pošiljatelj,Teža,Cena) {
        this.id_Paket=id_Paket;
        this.Pošiljatelj=Pošiljatelj;
        this.Teža=Teža;
        this.Cena=Cena;
    }
};
exports.insert =function(data){
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            var sql = "INSERT INTO paket (Pošiljatelj,Teža,Cena) VALUES ('"+data.Pošiljatelj+"', '"+data.Teža+"', '"+data.Cena+"')"
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
            var sql = "SELECT * FROM paket "
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
            var sql = "DELETE FROM paket WHERE ID_Paket="+id+";"
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
            var sql = "UPDATE paket SET ID_Paket="+data.id_Paket+", Pošiljatelj= '"+data.Pošiljatelj+"', Cena='"+data.Cena+
            "' WHERE ID_Paket="+data.id_Paket+";"
            con.query(sql, function (err, result) {
                if (err) return(reject(err))
                return resolve(result)
            });
        });
    })
}