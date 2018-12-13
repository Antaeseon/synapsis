const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Person = require("../models/person");
const Team = require("../models/team");
const User = require('../models/user');

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
  person.isChecked = 0;

  if(req.body.sportsCategory == 1){person.sportsCategory = "basketball"}
  else if(req.body.sportsCategory == 2){person.sportsCategory = "soccer"}
  else{person.sportsCategory = "baseball"}

 

  person.position = req.body.position;
  person.region = req.body.region;
  person.comment = req.body.comment;

  

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

// 팀장이 용병에게 채용요청(자신의 팀정보를 전달)
router.post("/apply", function(req, res) {
  var idx = req.body.index;
  var user_id = req.body.user_id;
  var team;

  User.findOne({ id: user_id },function(err,result) {
    if (err) return res.status(500).send({ error: "로그인 에러 발생!" });
  
    Person.update({ index: idx },{$set:{ teamName : team , isChecked : 1} },function(err) {
      if (err) return res.status(500).send({ error: "용병정보 업데이트중 에러발생!" });
    });
    res.json({ success:1 });
  });
});

// 용병이 자신에게 온 메세지 확인(요청한 팀의 정보)
router.post("/message", function(req, res) {
  var id = req.body.user_id;
  console.log(id);
  // 인덱스에 해당하는 게시글 불러오기.
  Person.find({ user_id: id }, function(err, result) {
    if (err) return res.status(500).send({ error: "데이터를 로드하는데 오류가 발생했습니다." });
    if (!result) return res.status(500).send({error:"용병 신청 목록에 현재 아이디가 없습니다."});
    res.json(result);
  });
});

// 용병이 자신에게 온 메세지 수락여부 결정.
router.post("/accept", function(req, res) {
  var user_id = req.body.user_id;
  var index = req.body.index;
  var team;

  User.findOne({ id: user_id },function(err,result) {
    if (err) return res.status(500).send({ error: "로그인 에러 발생!" });
    team = result.teamName;

    Team.updateOne({ teamName: team },{ $addToSet: { $push: { personList : user_id }}},function(err) {
      if (err) return res.status(500).send({ error: "팀정보 업데이트중 에러발생!" });
    });

    Person.updateOne({ index: index },{$set:{ teamName : team , isChecked : 2} },function(err) {
      if (err) return res.status(500).send({ error: "용병정보 업데이트중 에러발생!" });
    });
    res.json({ success:1 });
  });
});

//용병이 경기를 했거나 일시가 만료된경우 체크해서 상태를 변경.
router.post("/check", function(req, res) {
  var user_id = req.body.user_id;
  var team;

  User.findOne({ id: user_id },function(err,result) {
    if (err) return res.status(500).send({ error: "로그인 에러 발생!" });
    team = result.teamName;

    Team.updateOne({ teamName: team },{ $addToSet: { $push: { personList : user_id }}},function(err) {
      if (err) return res.status(500).send({ error: "팀정보 업데이트중 에러발생!" });
    });

    Person.update({ user_id: user_id },{$set:{ teamName : team , isChecked : 2} },function(err) {
      if (err) return res.status(500).send({ error: "용병정보 업데이트중 에러발생!" });
    });
    res.json({ success:1 });
  });
});
module.exports = router;
