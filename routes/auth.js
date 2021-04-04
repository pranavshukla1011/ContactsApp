const express = require('express');
const router = express.Router();

//@route  GET api/auth
//@desc   Get a logged in user
//@access Private
router.get('/', (req, res) => {
  res.send('Get a logged in user');
});

//@route  POST api/auth
//@desc   Post a new user and token
//@access Public
router.post('/', (req, res) => {
  res.send('Post a new User Login');
});

module.exports = router;
