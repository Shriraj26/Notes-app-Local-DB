const Note = require('../models/notes');

module.exports.deleteFunction = function(id){

	console.log('Reached the deleteFunction!11');
	Note.findByIdAndDelete(id, function(err){
		if(err){
			console.log('error in deleting the object from the DB - ',err);
			return;
		}
		
		console.log('Entry deleted from DB successbully');
		return;
	});
}