var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.json(
    {
      a:"안녕"
    }
  );
});

module.exports = router;
