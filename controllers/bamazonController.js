var express = require("express");

var router = express.Router();

// Import the model (product.js) to use its database functions.
var product = require("../models/product.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  product.all(function(data) {
    var hbsObject = {
      products: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


// Export routes for server.js to use.
module.exports = router;
