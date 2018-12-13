var express = require('express');
var router = express.Router();
const matchList = require('../models/matchList');


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
        catch{
            res.status(403).send({message:"fail"})
        }
    


})


// 불러오기





module.exports = router;
