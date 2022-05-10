const express = require('express');
const router = express.Router();

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { requireAuth } = require('../auth');
const { Review } = require('../db/models/review');
const { User } = require('../db/models/user')

router.get('/:id/review', csrfProtection, asyncHandler(async(req, res) => {
    const id = req.params.id

    const park = await db.Park.findByPk(id, {
        include: User
    })
    // const user = await db.User.findByPk(id)

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

    res.redirect('/parks')
}))

router.delete('/:id', requireAuth, asyncHandler(async (req, res) => {
    const id = req.params.id;
    const deletedReview = await Review.findOne({
       where: {
          userId: userId,
          parkId: id
       }
    })
    await deletedReview.destroy()
    res.redirect('/parks');
}));

// router.put('/:id/review', requireAuth, asyncHandler(async(req, res) => {

// }))




module.exports = router;
