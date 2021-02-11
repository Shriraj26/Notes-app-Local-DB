const { query } = require('express');
const Note = require('../models/notes');
const deleteFunction = require('./deleteNoteFunction');
module.exports.deleteSelectedFunc = function(req, res){
	
	
	
	if(typeof req.body.arrList !== "undefined") {
		for(let i=0; i<req.body.arrList.length; i++){
			deleteFunction.deleteFunction(req.body.arrList[i]);
		}
	
	}
	return res.redirect('/');
	
	
};