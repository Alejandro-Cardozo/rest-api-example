var express = require('express');
var router = express.Router();
var mysqlConnection = require('../database');

router.get('/', (req, res) => {
	mysqlConnection.query('SELECT * FROM employees', (err, rows, fields)=> {
		if(!err){
			res.json(rows);
		} else {
			console.log(err);
		}
	});
});

module.exports = router;