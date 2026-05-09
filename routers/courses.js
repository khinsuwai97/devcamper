const express = require("express");
const { getCourses } = require("../controllers/courses");
const router = express.Router({ mergeParams: true });

router.route("/").get(getCourses);
// router.get("/:bootcampId", getCourses);

module.exports = router;
