var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'password',
	database: 'mycompany'
});

mysqlConnection.connect(function(err){
	if(err){
		console.log(err);
		return;
	} else {
		console.log('DB connected');
	}
});

module.exports = mysqlConnection;