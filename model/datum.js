var con =require ("./connection");
var console = require('console');

exports.ClassDatum =class Datum{
    constructor(ID_Datum,DatumPrejetja,DatumPoslanosti) {
        this.ID_Datum=ID_Datum;
        this.DatumPrejetja=DatumPrejetja;
        this.DatumPoslanosti=DatumPoslanosti
    }
};
exports.insert = function(data){
    con.connect(function(err) {
        var sql = "INSERT INTO datum (DatumPrejetja, DatumPoslanosti) VALUES ('"+data.DatumPrejetja+"', '"+data.DatumPoslanosti+"')"
        con.query(sql, function (err, result) {
            if (err) throw err
            var sql = "SELECT LAST_INSERT_ID() as data;"
            con.query(sql, function (err, result) {
                if (err) throw err
                return result[0].data
            });
        });
    });
}
exports.selectAll =function(){
    con.connect(function(err) {
        var sql = "SELECT * FROM datum;"
        con.query(sql, function (err, result) {
            if (err) throw err
            return result;
        });
    });
}
exports.delete=function (id){
    con.connect(function(err) {
        var sql = "DELETE FROM datum WHERE id_Datum="+id+";"
        con.query(sql, function (err, result) {
            if (err) throw err
            return result
        });
        
    });
}
exports.update=function (data){
    con.connect(function(err) {
        var sql = "UPDATE datum SET id_Datum="+data.ID_Datum+", DatumPrejetja= '"+data.DatumPrejetja+"', DatumPoslanosti='"+data.DatumPoslanosti+
        "' WHERE id_Datum="+data.ID_Datum+";"
        con.query(sql, function (err, result) {
            if (err) throw err
            return result
        });
    });
}
