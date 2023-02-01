const express = require('express');
const {
  productGet,
  productPost,
  productPut,
  productDelete,
} = require('../controllers/products');
const router = express.Router();

router
  .route('/')
  .get(productGet)
  .post(productPost)
  .put(productPut)
  .delete(productDelete);

module.exports = router;
