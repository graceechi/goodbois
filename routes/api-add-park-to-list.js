const express = require('express');
const router = express.Router();

const { asyncHandler } = require('./utils');
const { loginUser, restoreUser, requireAuth } = require('../auth');
const { User, Park, ParksList } = require('../db/models');

// /:id/parksList/:parksId
router.post('/:id', requireAuth, asyncHandler(async (req, res) => {
    console.log(req.body)
    const { userId } = req.session.auth;
    // const { parksId } = req.body;
    const parksId = req.params.id; // park id in url path

    // const park = await Park.findByPk(parksId); // req.params.id
    // const user = await User.findByPk(userId);

    // adding park to parks list on profile page
    const park = await Park.create({
        parksId: parksId,
        userId: userId,

    })

    res.redirect(`/parks/${parksId}`)

    // res.json({
    //     park, // which park to add
    //     user // whose profile to add park to
    // })
    // res.status(201);
}))


module.exports = router;
