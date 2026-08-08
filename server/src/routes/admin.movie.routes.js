const express = require("express");

const {
  requireAuth,
  requireAdmin,
} = require("../middleware/auth.middleware");

const {
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/admin.movie.controller");

const router = express.Router();

// =========================
// Create Movie
// =========================

router.post(
  "/",
  requireAuth,
  requireAdmin,
  createMovie
);

// =========================
// Update Movie
// =========================

router.put(
  "/:slug",
  requireAuth,
  requireAdmin,
  updateMovie
);

// =========================
// Delete Movie
// =========================

router.delete(
  "/:slug",
  requireAuth,
  requireAdmin,
  deleteMovie
);

module.exports = router;