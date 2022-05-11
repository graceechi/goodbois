const express = require('require');
const router = express.Router();
const db = require('../db/models');
const { Op } = require('sequelize');

const { asyncHandler } = require('./utils');
const { User, Park, Review } = db;

router.get('/parks', asyncHandler(async (req, res) => {
    const parks = await Park.findAll({
        where: {

        }
    })
}))
