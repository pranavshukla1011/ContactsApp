const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const router = express.Router();

const User = require('../models/User');

const { check, validationResult } = require('express-validator');

//@route  POST api/user
//@desc   Post a new User
//@access Public

router.post(
  '/',
  [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'please enter valid eamil').isEmail(),
    check('password', 'please enter password of length >= 6').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // res.send('Info Passed');
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email: email });
      if (user) {
        return res.status(400).json({
          msg: 'User Already Exists',
        });
      }

      user = new User({
        name: name,
        email: email,
        password: password,
      });

      //hashing password befor sending in database
      const salt = await bcrypt.genSalt(10); //hashing security

      user.password = await bcrypt.hash(password, salt);

      await user.save();
      console.log('User Saved');

      //assigning jwt
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
        (error, token) => {
          if (error) throw error;
          return res.json({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
