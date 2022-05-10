const express = require('express')
const router = express.Router();

const { csrfProtection, asyncHandler } = require('./utils');
const { restoreUser } = require('../auth');
const db = require('../db/models');


router.get('/:id', csrfProtection, restoreUser, asyncHandler(async(req, res) => {
  const id = req.params.id;
  const user = await db.User.findByPk(id);
  const parkslist = await db.ParksList.findAll({
    where : { userId : id },
    // include: [Parks],
    // order: {name},
  });
    res.render('user-profile', {
      title: 'profile',
      fullName: 'user.fullName',
      email: 'user.email',
      user,
      parkslist,
      csrfToken: req.csrfToken(),
    });
  }));




  module.exports = router;