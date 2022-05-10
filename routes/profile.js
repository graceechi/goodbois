const express = require('express')
const router = express.Router();

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');


router.get('/profile', csrfProtection, (req, res) => {
    res.render('user-profile', {
      title: 'profile',
      csrfToken: req.csrfToken(),
    });
  });




  module.exports = router;