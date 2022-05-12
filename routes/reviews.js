const express = require('express');
const router = express.Router();

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { User } = require('../db/models/user')
const { Park } = require('../db/models/user')
const { requireAuth } = require('../auth');

router.get('/:id/review', csrfProtection, asyncHandler(async(req, res) => {
    const id = req.params.id

    const park = await db.Park.findByPk(id, {
        include: User
    })

    res.render('review-form', { title: 'Review', park, csrfToken: req.csrfToken() })
}));

router.post('/:id/review', requireAuth, csrfProtection, asyncHandler(async(req, res) => {
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

router.delete('/:parkid/review/:reviewid', requireAuth, asyncHandler(async (req, res) => {
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


router.put('/:parkId/review/:reviewId', asyncHandler(async (req, res) => {
    const { reviewid } = req.params;

    const review = await db.Review.findByPk(reviewid, {
        include: User
    })

    console.log(req.body)
    review.rating = req.body.rating;
    review.title = req.body.title;
    review.body = req.body.body;

    res.json({
        message: 'Success',
        review
    })
}))

// router.get('/:parkid/review/:reviewid/edit', csrfProtection, asyncHandler(async(req, res) => {
//     const { parkid, reviewid } = req.params;

//     const park = await db.Park.findByPk(parkid)
//     const review = await db.Review.findByPk(reviewid, {
//         include: User
//     })
//     res.render('edit-review', {
//         title: 'Edit Review',
//         review,
//         park,
//         csrfToken: req.csrfToken()
//     })
// }))

// router.post('/:parkid/edit', csrfProtection, asyncHandler(async (req, res) => {
//     const reviewId = req.params.id;
//     console.log('REQUEST HITS HERE')
//     console.log(req.params)
//     const reviewToEdit = await db.Review.findByPk(reviewId);

//     const { parksId, userId, rating, reviewTitle, reviewDescription } = req.body

//     const review = await db.Review.create({
//         parksId: parksId,
//         userId: userId,
//         rating: rating,
//         title: reviewTitle,
//         body: reviewDescription
//     })

//     res.redirect(`/parks/${parksId}`)
// }))




module.exports = router;
