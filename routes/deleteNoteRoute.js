const express = require('express')

const router = express.Router();

const deleteNoteController = require('../controllers/deleteNote_controller');

router.get('/deleteNote', deleteNoteController.deleteNoteFunc);

module.exports = router;