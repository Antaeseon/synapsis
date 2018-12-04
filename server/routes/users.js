var express = require('express');
var router = express.Router();
const Team = require('../models/team')
const User = require('../models/user');

/* GET users listing. */
router.post('/getTeamInfo',async function(req, res, next) {
  teamName=req.body.teamName
  console.log('팀이름',teamName)
  var team = await Team.findOneByTeamName(teamName)
  res.send(team)
});

router.post('/getUserInfo',async function(req, res, next) {
  userId=req.body.id
  console.log('아이디 ',userId)
  var user = await User.findOneById(userId)
  console.log(user)
  res.send(user)
});
module.exports = router;
