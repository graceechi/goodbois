const express = require('express');
const router = express.Router();

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { User } = require('../db/models/user')
const { requireAuth } = require('../auth');

router.get('/:id/review', csrfProtection, asyncHandler(async(req, res) => {
    const id = req.params.id

    const park = await db.Park.findByPk(id, {
        include: User
    })

    res.render('review-form', { title: 'Review', park, csrfToken: req.csrfToken() })
}));

router.post('/:id/review', requireAuth, asyncHandler(async(req, res) => {
    const { parksId, userId, rating, reviewTitle, reviewDescription } = req.body

    const review = await db.Review.create({
        parksId: parksId,
        userId: userId,
        rating: rating,
        title: reviewTitle,
        body: reviewDescription
    })

    res.redirect(`/parks/${parksId}`)
}))
router.use((req, res, next) => {
    console.log('request hits here')
    next();
})
router.delete('/:parkid/review/:reviewid', requireAuth, asyncHandler(async (req, res) => {
    console.log('you are in the delete route')
    const { reviewid } = req.params;
    const deletedReview = await db.Review.findByPk(reviewid)
    await deletedReview.destroy()
    if (deletedReview) {
        await deletedReview.destroy()
        res.json({message: 'Success'})
    } else {
        res.json({message: 'Fail'})
    }
}));

// router.put('/:id/review', requireAuth, asyncHandler(async(req, res) => {

// }))




module.exports = router;
