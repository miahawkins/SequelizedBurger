var express = require("express");
// var burger = require("../models/burger.js");

var router = express.Router();
var db = require("../models");


router.get("/", function(request, response) {

	db.Burger.findAll({

	}).then(function(result) {
		// response.json(result);
		var hbsObject = {
			burgers: result
		};
		response.render("index", hbsObject);
	});
});

router.post("/burgers", function(request, response) {

	db.Burger.create(
		{
			burger_name: request.body.burger_name,
			devoured: false
		}
	).then (function(result) {
		response.redirect("/");
	});
});


router.post("/burgers/:id", function(request, response) {
	var condition = "id = " + request.params.id;

	db.Burger.findOne({ where: {id: request.params.id}})

	.then(function(eaten) {
		eaten.update({
			devoured: true,
		})
		.then(function() {
			response.redirect("/");
		})
	})

});

module.exports = router;
