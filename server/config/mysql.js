/*
var mysql      = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
  host     : 'localhost:3306',
  user     : 'bob',
  password : 'secret'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});
*/