var express = require('express');
var router = express.Router();
const checkScore = require('../models/checkScore')

/* GET home page. */
router.post('/', async function(req, res, next) {
    myteam=req.body.teamName
    var vsTeam=await checkScore.find({team2:myteam})
    res.send(vsTeam)
});

module.exports = router;
