const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.get("/", function(req, res){
    Post.find({}, function(err, result){
        if(err) return res.status(500).send({ error : "DB is not found!"});
        res.json(result);
        console.log(result);
    }).setOptions({score: -1});
});

module.exports = router;