const express = require('express');
const router = express.Router();
const Category = require('../models/Category')

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', {
//     title: 'Express',
//     layout: 'layout'
//   });
// });

router.get('/', async function (req, res, next) {
  const phones = await Category.find()

  console.log(phones);
  

  // const categories = new Category({
  //   name,
  //   price,
  //   img,
  // })

  res.render('index', {
    title: 'Express',
    layout: 'layout',
    phones
  });
});

module.exports = router;