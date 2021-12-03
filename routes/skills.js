var express = require('express');
var router = express.Router();

//require skills controller
const skillsCtrl = require('../controllers/skills');

// get /skills
router.get('/', skillsCtrl.index);

//get /skills/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
