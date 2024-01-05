const express = require("express")

const router = express.Router()

const {
  createInstructor,
  getInstructorByinstructorId,
  updateInstructor,
  deleteInstructor,
  getAllInstructors,
} = require("../controller/instructorController")

router.get("/", getAllInstructors)
router.post("/", createInstructor)
router.get("/:id", getInstructorByinstructorId)
router.post("/:id", updateInstructor)
router.delete("/:id", deleteInstructor)

module.exports = router