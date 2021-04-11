const express = require('express');

const jwt = require('jsonwebtoken');
const bycrypt = require('bcryptjs');
const config = require('config');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

const { check, validationResult } = require('express-validator');
const { json } = require('express');
//@route  GET api/auth
//@desc   Get a logged in user info
//@access Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('id');
    res.json({ user: user });
    console.log('Login Complete');
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      msg: 'Server Error',
    });
  }
});

//@route  POST api/auth
//@desc   Login a User
//@access Public
router.post(
  '/',
  [
    check('email', 'Enter Correct Email').isEmail(),
    check('password', 'Enter Valid Password').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email: email });

      if (!user) {
        return res.status(400).json({ msg: 'User Not Found' });
      }

      const isMatch = await bycrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 36000,
        },
        (err, token) => {
          if (err) throw err;
          res.send({ token: token });
        }
      );
      console.log('Login Verification Complete');
    } catch (err) {
      console.log(err.message);
      res.status(500).json({
        msg: 'Server Error',
      });
    }
  }
);
module.exports = router;
