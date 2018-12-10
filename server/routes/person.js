const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Person = require("../models/person");


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// 전체 용병 목록 받아오기
router.get("/", function(req, res) {
  Person.find({}, function(err, result) {
    if (err) return res.status(500).send({ error: "DB is not found!" });
    res.json(result);
  });
});

// 용병 등록하기.
router.post("/register", function(req, res) {
  var person = new Person();

  person.user_id = req.body.user_id;
  person.teamName = req.body.teamName;
  person.date = req.body.date;
  person.time = req.body.time;
  person.sportsCategory = req.body.sportsCategory;

  if(req.body.sportsCategory == 1){person.sportsCategory = "basketball"}
  else if(req.body.sportsCategory == 2){person.sportsCategory = "soccer"}
  else{person.sportsCategory = "baseball"}

  person.position = req.body.position;
  person.region = req.body.region;
  person.comment = req.body.comment;
  person.isChecked = false; // 초기 계약 false

  person.save(function(err) {
    if (err) {
      console.error(err);
      return;
    }
    res.json({ result: 1 });
  });
});

// 용병 상세 보기.
router.get("/:index", function(req, res) {
  var idx = req.params.index;

  // 인덱스에 해당하는 게시글 불러오기.
  Person.find({ index: idx }, function(err, result) {
    if (err) return res.status(500).send({ error: "해당 글이 없습니다." });
    console.log(result);
    res.json(result);
  });
});

// 용병채용을 원하는 팀의정보 불러오기
router.get("/loadteam", function(req, res) {
  var idx = req.params.index;

  // 인덱스에 해당하는 게시글 불러오기.
  Person.find({ index: idx }, function(err, result) {
    if (err) return res.status(500).send({ error: "해당 글이 없습니다." });
    console.log(result);
    res.json(result);
  });
});
// 용병채용이 승락된후 채용팀에 용병을 추가.
router.get("/sendteam", function(req, res) {
  var idx = req.params.index;

  // 인덱스에 해당하는 게시글 불러오기.
  Person.find({ index: idx }, function(err, result) {
    if (err) return res.status(500).send({ error: "해당 글이 없습니다." });
    console.log(result);
    res.json(result);
  });
});

module.exports = router;
