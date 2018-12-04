const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Post = require("../models/post");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// 게시글 목록 받아오기
router.get("/", function(req, res) {
  Post.find({}, function(err, result) {
    if (err) return res.status(500).send({ error: "DB is not found!" });
    res.json(result);
    console.log(result);
  }).setOptions({ score: -1 });
});

// 게시글 등록하기.
router.post("/register", function(req, res) {
  var post = new Post();
  post.title = req.body.title;
  post.context = req.body.content;
  post.user_id = req.body.user_id;
  post.date = Date.now();

  post.save(function(err) {
    if (err) {
      console.error("error");
      return;
    }
    res.send({ result: 1 });
  });
});

module.exports = router;
