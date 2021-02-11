const { query } = require('express');
const Note = require('../models/notes');
const deleteFunction = require('./deleteNoteFunction');
module.exports.deleteNoteFunc = function(req, res){
	
	console.log(req.query.id);
	let id = req.query.id;

	deleteFunction.deleteFunction(req.query.id);
	
	return res.redirect('/');
	
};