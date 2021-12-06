var express = require('express');
var router = express.Router();

//require skills controller
const skillsCtrl = require('../controllers/skills');

// get /skills
router.get('/', skillsCtrl.index);

//get /skills/new for creating new skill

router.get('/new', skillsCtrl.new)

//get /skills/:id
router.get('/:id', skillsCtrl.show);

//POST new skill
router.post('/', skillsCtrl.create);

//DELETE skill
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
