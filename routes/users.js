const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { csrfProtection, asyncHandler } = require('./utils');

const db = require('../db/models');
const { loginUser, logoutUser, restoreUser, requireAuth } = require('../auth');

router.get('/signup', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('sign-up', {
    title: 'Sign-Up',
    user,
    csrfToken: req.csrfToken(),
  })
})

const userValidators = [
  check('fullName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Full Name')
    .isLength({ max: 100 })
    .withMessage('Full Name must not be more than 100 characters long'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email is already in use by another account');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    // regex
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    })
];

router.post('/signup', csrfProtection, userValidators, asyncHandler(async(req, res) => {
  const { fullName, email, password } = req.body;
  const user = db.User.build({
    fullName,
    email
  });
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    // persists the user's login state after successfully logging in
    loginUser(req, res, user);
    res.redirect(`/profile/${user.id}`);
    } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('sign-up', {
        title: 'Sign Up',
        user,
        errors,
        csrfToken: req.csrfToken(),
    });
  }

}))

router.get('/login', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('log-in', {
    title: 'Log-in',
    csrfToken: req.csrfToken(),
  })
})

const logInValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (!user) {
            return Promise.reject('Login failed for the provided email address and password');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];

router.use((req, res, next) => {
  console.log(req.body);
  next();
})

router.post('/login', csrfProtection, logInValidators, asyncHandler(async(req, res) => {
  const { email, password } = req.body;

  let errors = [];
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({where: { email }})
    if (user !== null) {
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString())
        if (passwordMatch) {
            loginUser(req, res, user);
            req.session.save(() => {
              return res.redirect(`/profile/${user.id}`);
            })
        }
    }
    errors.push('Login failed for the provided email address and password');

    // res.render('log-in', {
    //   title: 'Log In',
    //   email,
    //   errors,
    //   csrfToken: req.csrfToken()
    // })
    } else {
      console.log(errors)
      errors = validatorErrors.array().map((error) => error.msg)

    res.render('log-in', {
        title: 'Log In',
        email,
        errors,
        csrfToken: req.csrfToken()
    })
  }

}))

router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/users/login')
})

// router.post('/profile/demo', restoreUser, csrfProtection, asyncHandler(async (req, res) => {

//   const user = db.User.findOne({
//     where: { id: 2, fullName: 'Demo', email: 'demo@gmail.com', password: 'Demo@1'}
//   });
//   loginUser(req, res, user);
//   return res.redirect(`/profile/demo`);
// }))

// router.post('/profile/demo', csrfProtection, asyncHandler(async (req, res) => {
//   const userId = db.User.findByPk({
//     where: { id: 1 }
//   });
//   res.render(`/profile/${userId}`);
//   loginUser(req, res, user);
// }))

module.exports = router;
