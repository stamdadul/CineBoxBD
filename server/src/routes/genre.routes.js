const express = require("express");

const {
  getGenres,
  getGenre,
} = require("../controllers/genre.controller");

const router = express.Router();

router.get("/", getGenres);
router.get("/:slug", getGenre);

module.exports = router;