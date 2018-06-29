const db = require("../models");
const Sequelize = require("sequelize");
var moment = require("moment");

const Op = Sequelize.Op;

module.exports = function (app) {
  "use strict";
  app.get("/api/allproducts", function (req, res) {
    db.Product.findAll().then(function (dbArticles) {
      res.json(dbArticles);
    });
  });
}