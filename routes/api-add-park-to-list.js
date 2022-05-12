const express = require('express');
const router = express.Router();

const { asyncHandler } = require('./utils');
const { User, Park, ParksList } = require('../db/models');

router.post('/:id', asyncHandler(async (req, res) => {
    console.log(req.body)
    const { userId } = req.session.auth;
    // const { parksId } = req.body;
    const parkId = req.params.id; // id in url path


    const park = await Park.findByPk(parkId); // req.params.id
    const user = await User.findByPk(userId);
    // adding park to parks list on profile page
    // const parklist = await ParksList.create({
    //     parksId
    // })

    res.json({
        park, // which park to add
        user // whose profile to add park to
    })
    res.status(201);
}))

module.exports = router;
