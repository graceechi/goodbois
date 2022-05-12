const express = require('express')
const router = express.Router();


const { csrfProtection, asyncHandler } = require('./utils');
const { restoreUser, requireAuth, logoutUser } = require('../auth');
const {User, Park, ParksList} = require('../db/models');
const db = require('../db/models');
// const {logoutUser} = require('../auth')



router.get('/:id', csrfProtection, restoreUser, asyncHandler(async(req, res) => {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    const parks = await Park.findAll({
      include: [{
        model: ParksList,
        where: {userId}
      }]
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

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
  const userId = req.params.id;
  // const user = await User.findByPk(userId);

  // const parksId = req.params.id;

  const user = await db.User.findByPk(userId, {
      include: ParksList
  });

  res.render('user-profile', {
    // title: 'profile',
    // fullName: 'user.fullName',
    // email: 'user.email',
    // `${park.name}`,
    user,
    // park,
  });
}));

router.delete('/:parkId', requireAuth, asyncHandler(async (req, res) => {
  console.log('in the delete park from profile route');
  const parkId = req.params.id;
  console.log(req.params.id)
  const deletedPark = await db.Park.findByPk(parkId, {
    // include: ParksList
  })
  if (deletedPark) {
    await deletedPark.destroy();
    res.json({ message: 'Success' });
  } else {
    res.json({ message: 'Fail' });
  }
}))

// router.post('/logout', (req, res) => {
//   logoutUser(req, res);
//   res.redirect('/users/login')
//   res.render('user-profile', {
//     title: 'profile',
//     fullName: 'user.fullName',
//     email: 'user.email',
//     user,
//     parks,
//     csrfToken: req.csrfToken(),
//   });
// });

router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/')
})


module.exports = router;
