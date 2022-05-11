// GET splash page

const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { csrfProtection, asyncHandler } = require('./utils');

const db = require('../db/models');

/* GET home page. */
router.get('/', csrfProtection, (req, res) => {
    res.render('index', {
        title: 'goodbois',
        csrfToken: req.csrfToken()
    })
})


module.exports = router;
