const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { Op } = require('sequelize');

const { asyncHandler } = require('./utils');
const {  Park  } = db;

router.get('/search', asyncHandler(async (req, res) => {
    const parks = await Park.findAll({
        where: {
            [Op.or]: [
                {
                    name: {
                        [Op.iLike]: `%${req.query.term}%`
                    }
                },
                {
                    state: {
                        [Op.iLike]: `%${req.query.term}%`
                    }
                }
            ]
        }
    })
    console.log(parks);
    res.render('search', {
        title: 'Park Search Results',
        parks
    });
}))

module.exports = router;