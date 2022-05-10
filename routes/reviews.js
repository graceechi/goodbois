const express = require('express');
const router = express.Router();

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { requireAuth } = require('../auth');
const Review = require('../db/models/review');
const Park = require('../db/models/park')

router.get('/parks/:id/review', asyncHandler(async(req, res) => {
    const id = req.params.id

    const park = await db.Park.findByPk(id)

    res.render('review-form', park)
}));

router.post('/:id/review', csrfProtection, requireAuth, asyncHandler(async(req, res) => {
    const { parkId, rating, reviewTitle, reviewDescription } = req.body

    const review = await Review.create({
        rating: rating,
        title: reviewTitle,
        body: reviewDescription
    })

    res.redirect(`/parks/${parkId}`)
}))

// router.put

// router.delete



module.exports = router;
