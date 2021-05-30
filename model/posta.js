var con =require ("./connection");
var console = require('console');

exports.ClassPosta =class Posta{
    constructor(ID_pošta,Kraj,PoštnaStevilka,TK_Drzava) {
        this.ID_pošta=ID_pošta;
        this.Kraj=Kraj;
        this.PoštnaStevilka=PoštnaStevilka;
        this.TK_Drzava=TK_Drzava;
    }
};
exports.insert =function(data){
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            var sql = "INSERT INTO pošta (Kraj,PoštnaStevilka,TK_Drzava) VALUES ('"+data.Kraj+"', '"+data.PoštnaStevilka+"', '"+data.TK_Drzava+"')"
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
            var sql = "SELECT * FROM pošta "
            con.query(sql, function (err, result) {
                if (err) return(reject(err))
                return resolve(result)
            });
        });
    })
}
exports.selectByTK_Drzava =function(id){
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            var sql = "SELECT * FROM pošta WHERE TK_Drzava="+id+";"
            con.query(sql, function (err, result) {
                if (err) return(reject(err))
                return resolve(result)
            });
        });
    })
}

exports.getElementByID =function(id){
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            var sql = "SELECT * FROM pošta WHERE ID_pošta="+id+";"
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
            var sql = "DELETE FROM pošta WHERE ID_pošta="+id+";"
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
            var sql = "UPDATE pošta SET ID_pošta="+data.ID_pošta+", Kraj= '"+data.Kraj+"', PoštnaStevilka='"+data.PoštnaStevilka+"', TK_Drzava='"+data.TK_Drzava+
            "' WHERE ID_pošta="+data.ID_pošta+";"
            con.query(sql, function (err, result) {
                if (err) return(reject(err))
                return resolve(result)
            });
        });
    })
}
