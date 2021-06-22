var express = require('express');
var router = express.Router();
var Product = require('../models/productSchema')

/* GET home page. */
router.get('/', async function (req, res, next) {

  let products = await Product.find();
  console.log(req.session.user);
  res.render('products/list1', { title: "Total Products In out Database", products })

});

router.get('/cart', function (req, res, next) {
  let cart = req.cookies.cart;
  if (!cart) cart = [];
  res.render("cart", { cart });
});
module.exports = router;
