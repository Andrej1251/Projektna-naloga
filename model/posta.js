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
    con.connect(function(err) {
        var sql = "INSERT INTO pošta (Kraj,PoštnaStevilka,TK_Drzava) VALUES ('"+data.Kraj+"', '"+data.PoštnaStevilka+"', '"+data.TK_Drzava+"')"
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
        var sql = "SELECT * FROM pošta "
        con.query(sql, function (err, result) {
            if (err) throw err
            return result
        });
    });
}
exports.delete=function (id){
    con.connect(function(err) {
        var sql = "DELETE FROM pošta WHERE ID_pošta="+id+";"
        con.query(sql, function (err, result) {
            if (err) throw err
            return result
        });
    });
}
exports.update=function (data){
    con.connect(function(err) {
        var sql = "UPDATE pošta SET ID_pošta="+data.ID_pošta+", Kraj= '"+data.Kraj+"', PoštnaStevilka='"+data.PoštnaStevilka+"', TK_Drzava='"+data.TK_Drzava+
        "' WHERE ID_pošta="+data.ID_pošta+";"
        con.query(sql, function (err, result) {
            if (err) throw err
            return result
        });
    });
}
