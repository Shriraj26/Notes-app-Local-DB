const express = require('express');


const router = express.Router();
const homeController = require('../controllers/home_controller')

console.log('Router Loaded');

//Route for home page -> directing it to homeController
router.get('/', homeController.home);

//Route for creating Note -> directing it to createNoteController
router.post('/createNote',   require('./createNoteRoute'));

//Routes for deleting Note -> directing it to createNoteController
router.get('/deleteNote', require('./deleteNoteRoute'));
router.post('/deleteSelected', require('./deleteSelectedRoute'));

module.exports = router;
