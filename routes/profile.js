const express = require('express')
const router = express.Router();

const { csrfProtection, asyncHandler } = require('./utils');
const { restoreUser } = require('../auth');
const {User, Park} = require('../db/models');


router.get('/:id', csrfProtection, restoreUser, asyncHandler(async(req, res) => {
  const id = req.params.id;
   const user = await User.findByPk(id, {
    include: Park
  });
    res.render('user-profile', {
      title: 'profile',
      fullName: 'user.fullName',
      email: 'user.email',
      user,
      parks,
      csrfToken: req.csrfToken(),
    });
  }));




  module.exports = router;