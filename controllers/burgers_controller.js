// Node dependencies
const express = require("express");

// Local dependencies
const burger = require("../models/burger");

// Set router
const router = express.Router();

// Routes
router.get("/", (req, res) => {
	burger.viewAll((data) => {
		const hbsObject = {
			burgers: data,
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

// Export
module.exports = router;
