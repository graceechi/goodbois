const express = require('express');
const router = express.Router();

const { Park } = require('../db/models');



router.get('/search', (req,res) => {
   res.render('search', {title: 'search'}) 
})




module.exports = router;