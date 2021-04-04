const express = require('express');
const router = express.Router();

//@route  POST api/user
//@desc   Post a new User
//@access Public

router.post('/', (req, res) => {
  res.send('Input a new User');
});

module.exports = router;
