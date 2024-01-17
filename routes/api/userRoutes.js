const { findAll, create } = require("../../controllers/userController");

const routes = require("express").Router();

routes.route("/")
.get(findAll)
.post(create)


module.exports = routes