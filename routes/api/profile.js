const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    // find user by user ref id and populate the name and avatar
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );
    //if no profile then send error
    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    //if profile exists --> send it along
    res.json(profile);
  } catch (err) {
    console.error(err.msg);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
