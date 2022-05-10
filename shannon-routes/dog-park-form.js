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

const parkValidators = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Name')
        .isLength({ max: 100 })
        .withMessage('Name must not be longer than 100 characters'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for City')
        .isLength({ max: 50 })
        .withMessage('City must not be longer than 50 characters'),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for State')
        .isLength({ max: 50 })
        .withMessage('State must not be longer than 50 characters'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Description'),
    check('parkSize')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Park Size')
        .isLength({ max: 8 })
        .withMessage('Park Size must not be larger than 999999.99'),
]

module.exports =  router;
