// require modules
const express = require("express");
const router = express.Router();

// mount controllers - destructure it
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamp.js");

// route the request - Bootcamps
router.route("/").get(getBootcamps).post(createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(createBootcamp)
  .post(updateBootcamp)
  .delete(deleteBootcamp);

// express router
module.exports = router;
