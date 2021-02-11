const { query } = require('express');
const Note = require('../models/notes');
const deleteFunction = require('./deleteNoteFunction');
module.exports.deleteNoteFunc = function(req, res){
	
	deleteFunction.deleteFunction(req.query.id);
	
	return res.redirect('/');
	
};