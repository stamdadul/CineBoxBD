const express = require("express");

const {
  requireAuth,
  requireAdmin,
} = require("../middleware/auth.middleware");

const router = express.Router();

router.get(
  "/profile",
  requireAuth,
  requireAdmin,
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Admin authentication successful",
      data: {
        user: req.user,
      },
    });
  }
);

module.exports = router;