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
		res.render("index", hbsObject);
	});
});
router.post("/api/burgers", (req, res) => {
	burger.create("burger_name", req.body.burger, (result) => {
		res.json({ id: result.insertId });
	});
});
router.put("/api/burgers/:id", (req, res) => {
	burger.update(req.params.id, "devoured", true, (result) => {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

// Export
module.exports = router;
