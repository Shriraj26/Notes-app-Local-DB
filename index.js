const express = require('express')

const port = 8000

const app = express();

const Note = require('./models/notes');

app.use(express.urlencoded());  
//The middleware parser to get the form data that client has filled up.


//Tell middleware to access static files from assets
app.use(express.static('./assets'));

//Import the DB from mongoose file
const db = require('./config/mongoose');

//Use the express router that we defined in router/index.js file
app.use('/', require('./routes'));

//Set the View Engine to EJS
app.set('view engine', 'ejs');

//Tell the index.js to look into views folder for the EJS files
app.set('views', './views');

app.listen(port, function(err){
	if(err){
		console.log(`Error while running to the server - ${err}`);
		return;
	}
	console.log(`Server running successfully on port - ${port}`)
});