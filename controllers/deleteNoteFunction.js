const Note = require('../models/notes');

module.exports.deleteFunction = function(id){

	Note.findByIdAndDelete(id, function(err){
		if(err){
			console.log(`Error in deleting the id ${id} from the DB - `);
			return;
		}
		
		console.log(`ID ${id} deleted from DB successfully`);
		return;
	});
}