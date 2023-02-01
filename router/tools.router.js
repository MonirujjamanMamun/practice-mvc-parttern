const express = require('express');
const {
  getTools,
  postTools,
  putTools,
  deleteTools,
} = require('../controllers/tools');
const router = express.Router();

router
  .route('/')
  .get(getTools)
  .post(postTools)
  .put(putTools)
  .delete(deleteTools);
module.exports = router;
