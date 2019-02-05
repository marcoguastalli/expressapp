const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

router.get('/welcome', product_controller.welcome);
router.post('/create', product_controller.product_create);
router.get('/:id', product_controller.product_details);

module.exports = router;