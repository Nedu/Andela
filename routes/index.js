const express = require("express");
const router = express.Router();
const Student = require("../models/student");

router.get("/", function(req, res) {
	res.redirect("/students");
});


module.exports = router;