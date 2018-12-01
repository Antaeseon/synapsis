var express = require('express');
var router = express.Router();
const Score = require('../models/checkScore');
const Team = require('../models/team')


/* GET users listing. */
router.post('/createScore',async function(req, res, next) {
    console.log(req.body)
    try{
        let {
            team1,
            team2,
            team1_score,
            team2_score,
            date
        }=req.body
    console.log("왜여기죵")

        const score= new Score({
            team1,
            team2,
            team1_score,
            team2_score,
            date
        })
        await score.save();
        res.json({message:"success"})
    }catch(err){
        res.status(401).json({message:err})
    }
});
module.exports = router;
