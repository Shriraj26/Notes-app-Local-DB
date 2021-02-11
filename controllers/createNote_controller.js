const Note = require('../models/notes');

module.exports.createNoteFunc = function(req, res){
	
	var dateArr = req.body.noteDateTime.split(" ");
	
	console.log(dateArr[0]);
	console.log(dateArr[1]);
	
	
	Note.create(
		{
			title: req.body.noteTitle,
			description: req.body.noteDesc,
			type: req.body.noteType,
			date: dateArr[0],
			time: dateArr[1] 
		}
		, function(err, newNote){
		if(err){
			console.log('error in creating new Note - ',err);
			return;
		}
		console.log('Successfully created a Note in DB - ', newNote);
		return res.redirect('/');
	});
	
	
};