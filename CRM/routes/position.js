const express = require('express');
const router = express.Router();
const controller = require('../controllers/position')

router.get('/:categoryId',controller.getPositionByCategoryId)
router.delete('/:id',controller.deletePositionById)
router.post('/',controller.createPosition)
router.patch('/:id',controller.updatePositionById)

module.exports = router;