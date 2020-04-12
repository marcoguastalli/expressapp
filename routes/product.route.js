const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

router.get('/welcome', product_controller.welcome);
router.post('/create', product_controller.product_create);
router.get('/:id', product_controller.product_details);
router.put('/:id/update', product_controller.product_update);
router.delete('/:id/delete', product_controller.product_delete);
// fase II
// use https://mongoosejs.com/docs/api.html#model_Model.findById
router.get('/faseII/ById', product_controller.product_by_id);

module.exports = router;