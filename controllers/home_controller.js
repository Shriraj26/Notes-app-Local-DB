const Note = require('../models/notes');

module.exports.home = function(req, res){
	
	Note.find({},function(err, notes){
		if(err){
			console.log(`Notes not found from DB - ${err}`);
			return;
		}
		return res.render('home', 
		{
			notes_list: notes
		});
		
	});
	
	
};