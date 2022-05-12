const express = require('express');
const router = express.Router();

const { asyncHandler } = require('./utils');
const { loginUser, restoreUser, requireAuth } = require('../auth');
const { User, Park, ParksList } = require('../db/models');

router.use((req, res, next) => {
    console.log('request hits here')
    next();
})

// /parls/:id/parksList
router.get('/:id/parksList', requireAuth, asyncHandler(async (req, res) => {
    console.log(req.body)
    const { userId } = req.session.auth;
    const parksId = req.params.id; // park id in url path

    const user = await User.findByPk(userId);

    // adding park to parks list on profile page
    const parkslist = await ParksList.findOrCreate({
        where: {
            parksId: parksId,
            userId: userId,
        }
    })

    // res.redirect(`/parks/${parksId}`)
    res.redirect(`/profile/${user.id}`)
}))


module.exports = router;
