const express = require('express');
const router = express.Router();

//@route    GET api/contact
//@desc     Get a particular user contact info
//@access   Private
router.get('/', (req, res) => {
  res.send('Get user contact');
});

//@route    POST api/contact
//@desc     Post a new contact in a particular user contact info
//@access   Private
router.post('/', (req, res) => {
  res.send('Post new user contact');
});

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
