const express = require("express");
const router = express.Router();
const Team = require("../models/team");

// DB에 저장된 팀리스트를 스코어순으로 정렬하여 클라이언트로 전송.
router.get("/", function(req, res) {
  Team.find({}, function(err, result) {
    if (err) return res.status(500).send({ error: "DB is not found! " });
    res.json(result);
    console.log(result);
  }).sort({ point: -1 });
});

module.exports = router;
