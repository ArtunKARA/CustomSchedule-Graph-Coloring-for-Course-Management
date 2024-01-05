const express = require("express");
const courses = require("./courses");
const instructor = require("./instructor");

const router = express.Router();

router.get("/", (req, res) => res.end("hello"));

router.use("/api/course", courses);
router.use("/api/instructor", instructor);

module.exports = router;