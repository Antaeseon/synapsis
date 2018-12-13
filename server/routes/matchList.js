var express = require("express");
var router = express.Router();
const matchList = require("../models/matchList");

// 등록
router.post('/register',async function(req,res){
    console.log(req.body)
    let team=req.body.team
    let location=req.body.location
    let date=req.body.date
    res.send({message:"안녕"})


    try{
        const match= new matchList({
            myteam:team,
            date,
            location,
        })
        await match.save();
            res.send({message:"success"})
        }
        catch(err){
            res.status(403).send({message:"fail"})
        }
})


// 불러오기

router.post('/getMatchList',async function(req,res){
    var myteam=req.body.team
    var team=await matchList.find({myteam:{$ne:myteam}})
    res.send(team)
})

//매치선택

router.post('/SelectMatch',async function(req,res){
    var id=req.body.id
    var team=req.body.team
    console.log('들어옴')
    var matchTeam=await matchList.findOne({_id:id})
    matchTeam.counterteam=team
    matchTeam.isAdmit=true
    await matchTeam.save()
    res.send({message: "success"})
})
module.exports = router;
