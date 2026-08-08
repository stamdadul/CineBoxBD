const express = require("express");

const {
  getMovies,
  getMovie,
} = require("../controllers/movie.controller");

const router = express.Router();

router.get("/", getMovies);
router.get("/:slug", getMovie);

module.exports = router;