const express = require('express');
const router = express.Router();

const newControllers = require('../app/controllers/NewsControllers');

// newControllers.index(req, res)
router.use('/:slug', newControllers.show);

router.use('/', newControllers.index);

module.exports = router;
