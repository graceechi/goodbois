const express = require('express');
const router = express.Router();

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { requireAuth } = require('../auth');

router.get('/reviews', (req, res) => {
    res.render('reviews', {
        title: 'Reviews'
    });
  });

router.post('/reviews', (req, res) => {

})

// router.put

// router.delete



module.exports = router;
