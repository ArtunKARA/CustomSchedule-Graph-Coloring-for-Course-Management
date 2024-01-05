const express = require("express")

const router = express.Router()

const {
  createCourse,
  getCourseByCourseId,
  updateCourse,
  deleteCourse,
  getAllCourses,
} = require("../controller/courseController")

router.get("/", getAllCourses)
router.post("/", createCourse)
router.get("/:id", getCourseByCourseId)
router.post("/:id", updateCourse)
router.delete("/:id", deleteCourse)


module.exports = router;