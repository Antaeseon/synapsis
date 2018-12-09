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
  person.region = req.body.region;
  person.category = req.body.category;
  person.position = req.body.position;
  person.date = req.body.date;
  person.time = req.body.time;
  person.selected = 0; // 매치성공 :1 , 매치찾는중 :0

  //카운트,인덱스는 디폴트 설정값이 있음.
  if (!person.user_id) res.json({ result: 0 });
  else {
    person.save(function(err) {
      if (err) {
        console.error(err);
        return;
      }
      res.json({ result: 1 });
    });
  }
});

// 용병 상세 보기.
router.get("/:index", function(req, res) {
  var idx = req.params.index;

  // 해당 게시글의 조회수 증가.
  Person.update({ index: idx }, { $inc: { count: 1 } }, function(err, result) {
    if (err) return res.status(500).send({ error: "조회수 업데이트 실패." });
    console.log("조회수 업데이트 성공!");
  });

  // 인덱스에 해당하는 게시글 불러오기.
  Person.find({ index: idx }, function(err, result) {
    if (err) return res.status(500).send({ error: "해당 글이 없습니다." });
    console.log(result);
    res.json(result);
  });

});
module.exports = router;