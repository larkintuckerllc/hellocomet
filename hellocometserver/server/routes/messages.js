var express = require('express');
var router = express.Router();
var messages = require('../controllers/messages');

router.get('/', messages.watch);
router.post('/', messages.post);

module.exports = router;
