const express = require('express')

const router = express.Router();

const deleteSelectedController = require('../controllers/delete_selected_controller');

router.post('/deleteSelected', deleteSelectedController.deleteSelectedFunc);

module.exports = router;