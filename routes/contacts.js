const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const Contact = require('../models/Contact');
const User = require('../models/User');

const { check, validationResult } = require('express-validator');
//@route    GET api/contact
//@desc     Get a particular user contact info
//@access   Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });

    console.log('Contacts for logged in user fetched');
    res.send(contacts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      msg: 'Server Error',
    });
  }
});

//@route    POST api/contact
//@desc     Post a new contact in a particular user contact info
//@access   Private
router.post(
  '/',
  [auth, [check('name', 'Enter a name').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email, type, phone } = req.body;
      const newContact = new Contact({
        name: name,
        email: email,
        phone: phone,
        type: type,
        user: req.user.id,
      });

      await newContact.save();
      res.status(200).json({
        msg: 'Request Successfully Processed',
      });
      console.log('New Contact Added');
    } catch (error) {}

    // res.send('Post new user contact');
  }
);

//@route    PUT api/contact/:id
//@desc     Update an existing user contact info
//@access   Private
router.put('/:id', (req, res) => {
  res.send('Update existing user contact');
});

//@route    DELETE api/contact/:id
//@desc     Delete a new contact in a particular user contact info
//@access   Private
router.delete('/:id', (req, res) => {
  res.send('Delete user contact');
});

module.exports = router;
