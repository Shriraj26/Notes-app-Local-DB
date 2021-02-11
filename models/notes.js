const mongoose = require('mongoose');
const { model } = require('../config/mongoose');

const notesSchemma = mongoose.Schema(
	{
		title:{
			type: String,
			required: true
		},
		description:{
			type: String,
			required: true
		},
		type :{
			type: String,
			required: true
		},
		
		date:{
			type: String,
			required: true
		},
		time:{
			type: String,
			required: true
		}

	}
);

const Note = mongoose.model('Note', notesSchemma);

module.exports = Note;
