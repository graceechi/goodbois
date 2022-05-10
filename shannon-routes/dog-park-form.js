//This can probably live in a parks.js file

const express = require('express');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('../routes/utils');


const router = express.Router();

router.get('/new', csrfProtection, (req, res) => {

    const park = db.Park.build();

    res.render('create-park', {
        title: 'Create Park',
        park,
        csrfToken: req.csrfToken()
    });
});

module.exports =  router;
