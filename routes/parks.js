const express = require('express');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
const { Review } = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils');



const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {

    const parks = await db.Park.findAll();

    res.render('parks', {title: 'Parks', parks })
}))

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {

    const parksId = req.params.id;

    const park = await db.Park.findByPk(parksId, {
        include: Review
    });

    let loggedInUser
    if (req.session.auth) {
        loggedInUser = req.session.auth.userId
    }

    res.render('park-details', {title: `${park.name}`, park, loggedInUser})
}))

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

router.post('/new', csrfProtection, parkValidators, asyncHandler(async(req, res) => {
    const {
        name,
        city,
        state,
        description,
        smallDogArea,
        doggieWaterFountain,
        fullyFenced,
        parkSize,
        parkingLot,
        wasteDisposal,
        agilityEquipment,
        shaded
    } = req.body

    const park = db.Park.build({
        name,
        city,
        state,
        description,
        smallDogArea,
        doggieWaterFountain,
        fullyFenced,
        parkSize,
        parkingLot,
        wasteDisposal,
        agilityEquipment,
        shaded
    });
console.log(park.smallDogArea)
    const validatorErrors = validationResult(req);

    if(validatorErrors.isEmpty()){
        await park.save();
        res.redirect('/parks');
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('create-park',{
        title: 'Create Park',
        park,
        errors,
        csrfToken: req.csrfToken()
    });
    }
}));

router.get('/:id(\\d+)/edit', csrfProtection, asyncHandler(async(req, res) => {
    const parksId = req.params.id;
    const park = await db.Park.findByPk(parksId);
    res.render('edit-park', {
        title: 'Edit Park',
        park,
        id: parksId,
        csrfToken: req.csrfToken()
    })

}));

router.post('/:id(\\d+)/edit', csrfProtection, parkValidators, asyncHandler(async(req, res)=> {
    const parksId = req.params.id;
    const parkToBeUpdated = await db.Park.findByPk(parksId);

    const {
        name,
        city,
        state,
        description,
        smallDogArea,
        doggieWaterFountain,
        fullyFenced,
        parkSize,
        parkingLot,
        wasteDisposal,
        agilityEquipment,
        shaded
    } = req.body

    const park = db.Park.build({
        name,
        city,
        state,
        description,
        smallDogArea,
        doggieWaterFountain,
        fullyFenced,
        parkSize,
        parkingLot,
        wasteDisposal,
        agilityEquipment,
        shaded
    });

console.log(park.doggieWaterFountain)
    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
        await parkToBeUpdated.update(park);
        res.redirect(`/parks/${parksId}`)
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('edit-park', {
            title: 'Edit Park',
            park,
            id: parksId,
            errors,
            csrfToken: req.csrfToken()
        });
    }

}))



module.exports =  router;
