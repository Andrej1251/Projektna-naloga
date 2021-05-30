
var console = require('console');
var mysql = require('mysql'); 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'mydb'
  });
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });


module.exports=connection;

