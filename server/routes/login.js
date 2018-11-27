const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const User = require('../models/user');
const config = require('../config');
const mongoose = require('mongoose');

const db = mongoose.connection;
mongoose.connect(config.mongodbUri, {
  useNewUrlParser: true
});

router.post('/', function (req, res, next) {
  const {
    id,
    password
  } = req.body;
  const secret = req.app.get('jwt-secret');
  console.log("secrete : ", secret);
  console.log(id, password)
  // check exist user
  const check = function (user) {
    if (!user) { //유저 존재 안함
      throw new Error('user not exist');
    } else {
      if (user.verify(password)) { //비밀번호 맞음
        const p = new Promise((resolve, reject) => {
          jwt.sign({
              id: user.id
            },
            secret, {
              expiresIn: '7d',
            },
            (err, token) => {
              if (err) reject(err);
              resolve(token);
            }
          )
        });
        return p;
      } else { //비밀번호 틀림
        throw new Error('incorrect password');
      }
    }
  };

  // return token
  const respond = function (Token) {
    console.log(Token)
    res.json({
      message: 'logged in successfully',
      Token
    });
  };

  // Error handling
  const onError = function (error) {
    console.log("-------------------------this", error.message)
    res.status(405).json({
      message: error.message
    })
  };

  User.findOneById(id)
    .then(check)
    .then(respond)
    .catch(onError);
});

module.exports = router;