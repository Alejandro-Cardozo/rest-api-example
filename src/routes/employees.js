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

router.get('/:id',(req, res) => {
	var {id} = req.params;
	mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (err, rows, fields)=>{
		if(!err){
			res.json(rows[0]);
		} else {
			console.log(err);
		}
	});
});

router.post('/',(req, res) => {
	const {id, name, salary} = req.body;
	const query = `
		CALL addOrEditEmployee(?,?,?);
	`;
	mysqlConnection.query(query, [id,name,salary], (err,rows,fields)=>{
		if(!err){
			res.json({Status: 'Employeed updated'});
		} else {
			console.log(err);
		}
	});
});

router.put('/:id', (req, res) => {
	const { name, salary} = req.body;
	const { id } = req.params;
	const query = 'CALL addOrEditEmployee(?,?,?)';
	mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
		if(!err){
			res.json({status: 'Employee updated'});
		} else {
			console.log(err);
		}
	});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (err,rows,fields)=>{
		if(!err){
			res.json({status: 'Employee deleted'});
		} else {
			console.log(err);
		}
	});
});

module.exports = router;