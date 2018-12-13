var express = require("express");
var router = express.Router();
const Score = require("../models/checkScore");
const Team = require("../models/team");

/* GET users listing. */
router.post("/createScore", async function(req, res, next) {
  console.log(req.body);
  try {
    let { team1, team2, team1_score, team2_score, date } = req.body;
    console.log("왜여기죵");

    const score = new Score({
      team1,
      team2,
      team1_score,
      team2_score,
      date
    });
    await score.save();
    res.json({ message: "success" });
  } catch (err) {
    res.status(401).json({ message: err });
  }
});
router.post("/getAllScore", async function(req, res, next) {
  console.log(req.body);
  let teamName = req.body.teamName;
  var resTeam = await Score.find({
    $or: [{ team1: teamName }, { team2: teamName }]
  });
  res.send(resTeam);
});

router.post("/getStatusScore", async function(req, res, next) {
  console.log(req.body);
  let teamName = req.body.teamName;
  var resTeam = await Score.find({ team2: teamName });
  res.send(resTeam);
});

router.post("/acceptScore", async function(req, res, next) {
  let id = req.body.id;
  let resTeam = await Score.find({ _id: id });
  let team1 = await Team.findOne({
    team_name: resTeam[0].team1
  });

  let team2 = await Team.findOne({
    team_name: resTeam[0].team2
  });
  //팀1 : 승
  //팀2 : 패
  if (resTeam[0].team1_score > resTeam[0].team2_score) {
    team1.win += 1;
    team2.lose += 1;
    resTeam[0].isAdmit = 1;

    var dif1 = team2.point - team1.point;
    var dif2 = team1.point - team2.point;

    // 점수차이가 500 이상인 경우
    if (Math.abs(dif1) >= 500) {
      team1.point =
        team1.point + 250 + dif1 * (1 / 5) + resTeam[0].team1_score * 10;
      team2.point =
        team2.point - 200 + dif2 * (1 / 5) + resTeam[0].team2_score * 10;
    }
    // 점수차이가 500 이하인 경우.
    else {
      team1.point =
        team1.point + 250 + dif1 * (1 / 10) + resTeam[0].team1_score * 10;
      team2.point =
        team2.point - 200 + dif2 * (1 / 10) + resTeam[0].team2_score * 10;
    }

    console.log("!!!!!");
    await team1.save();
    await team2.save();
    await resTeam[0].save();

    //팀1 : 패
    //팀2 : 승
  } else if (resTeam[0].team1_score < resTeam[0].team2_score) {
    team1.lose += 1;
    team2.win += 1;
    resTeam[0].isAdmit = 1;

    var dif1 = team2.point - team1.point;
    var dif2 = team1.point - team2.point;
    
    if (Math.abs(dif1) >= 500) {
      team1.point =
        team1.point - 200 + dif1 * (1 / 5) + resTeam[0].team1_score * 10;
      team2.point =
        team2.point + 250 + dif2 * (1 / 5) + resTeam[0].team2_score * 10;
    } else {
      team1.point =
        team1.point - 200 + dif1 * (1 / 10) + resTeam[0].team1_score * 10;
      team2.point =
        team2.point + 250 + dif2 * (1 / 10) + resTeam[0].team2_score * 10;
    }
    console.log("!!!!!");
    await team1.save();
    await team2.save();
    await resTeam[0].save();

    // 무승부
  } else {
    resTeam[0].isAdmit = 1;
    await resTeam[0].save();
  }

  console.log(resTeam);
  console.log("team1", team1);
  console.log("team2", team2);

  res.send(resTeam);
});

router.post("/cancelScore", async function(req, res, next) {
  let id = req.body.id;
  let resTeam = await Score.find({ _id: id });

  resTeam[0].isAdmit = 2;
  await resTeam[0].save();

  res.send(resTeam);
});
// router.post('/acceptScore',async function(req, res, next) {
//     let id=req.body.id
//     let resTeam=await Score.find(
//             {_id:id}
//     )
//     let team1 = await Team.findOne({
//         team_name : resTeam[0].team1
//     })

//     let team2 = await Team.findOne({
//         team_name : resTeam[0].team2
//     })

//     if(resTeam[0].team1_score>resTeam[0].team2_score){
//         team1.win+=1
//         team2.lose+=1
//         resTeam[0].isAdmit=1
//         await team1.save()
//         await team2.save()
//         await resTeam[0].save()
//     }else if(resTeam[0].team1_score<resTeam[0].team2_score){
//         team1.lose+=1
//         team2.win+=1
//         resTeam[0].isAdmit=1
//         await team1.save()
//         await team2.save()
//         await resTeam[0].save()
//     }else{
//         resTeam[0].isAdmit=1
//         await resTeam[0].save()
//     }

//     console.log(resTeam)
//     console.log("team1",team1)
//     console.log("team2",team2)

//     res.send(resTeam)
// });

module.exports = router;
