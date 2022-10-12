const express = require("express");
const { createJobApply } = require("../controllers/apply.controllers");
const router = express.Router();
const jobsControllers = require("../controllers/jobs.controllers");
const verifyToken = require("../middleware/verifyToken");

router.post("/", jobsControllers.createJobs).get("/", jobsControllers.getJobs);

router
  .get("/id", verifyToken, jobsControllers.getJobById)
  .post("/:id/apply", verifyToken, createJobApply)
  .patch("/id", jobsControllers.updateJobById);

module.exports = router;
