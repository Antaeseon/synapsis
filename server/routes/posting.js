const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Post = require("../models/post");
const date = require('date-and-time');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
// 게시글 전체 타이틀 목록 받아오기
router.get("/", function(req, res) {
  Post.find({}, function(err, result) {
    if (err) return res.status(500).send({ error: "DB is not found!" });
    res.json(result);
  }).sort({ index: -1 });
});

// 게시글 등록하기.
router.post("/register", function(req, res) {
  var post = new Post();
  post.title = req.body.title;
  post.context = req.body.context;
  post.user_id = req.body.user_id;
  let now = new Date();
  post.date = date.format(now,'YYYY/MM/DD HH:mm:ss');
  
  //카운트,인덱스는 디폴트 설정값이 있음.
  if (!post.user_id) res.json({ result: 0 });
  else {
    post.save(function(err) {
      if (err) {
        console.error(err);
        return;
      }
      res.json({ result: 1 });
    });
  }
});

// 게시글 상세 보기.
router.get("/:index", function(req, res) {
  var idx = req.params.index;

  // 해당 게시글의 조회수 증가.
  Post.update({ index: idx }, { $inc: { count: 1 } }, function(err, result) {
    if (err) return res.status(500).send({ error: "조회수 업데이트 실패." });
    console.log("조회수 업데이트 성공!");
  });

  // 인덱스에 해당하는 게시글 불러오기.
  Post.find({ index: idx }, function(err, result) {
    if (err) return res.status(500).send({ error: "해당 글이 없습니다." });
    console.log(result);
    res.json(result);
  });
});
module.exports = router;