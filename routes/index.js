const express = require('express');


const router = express.Router();
const homeController = require('../controllers/home_controller')

console.log('Router Loaded');

router.get('/', homeController.home);
router.post('/createNote',   require('./createNoteRoute'));
router.get('/deleteNote', require('./deleteNoteRoute'));
router.post('/deleteSelected', require('./deleteSelectedRoute'));

module.exports = router;
