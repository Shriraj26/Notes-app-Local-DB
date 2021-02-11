const express = require('express')

const router = express.Router();

const createNoteController = require('../controllers/createNote_controller');

router.post('/createNote', createNoteController.createNoteFunc);

module.exports = router;