const express = require("express");
const cors = require("cors");
require("dotenv").config();

const movieRoutes = require("./routes/movie.routes");
const authRoutes = require("./routes/auth.routes");
const adminRoutes = require("./routes/admin.routes");
const adminMovieRoutes = require("./routes/admin.movie.routes");
const categoryRoutes = require("./routes/category.routes");
const genreRoutes = require("./routes/genre.routes");

const app = express();

const PORT = process.env.PORT || 5000;

// =========================
// Middleware
// =========================

app.use(cors());
app.use(express.json());

// =========================
// Root
// =========================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "CineBoxBD API is running",
  });
});

// =========================
// Health Check
// =========================

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is healthy",
  });
});

// =========================
// Public Routes
// =========================

app.use("/api/movies", movieRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/genres", genreRoutes);

// =========================
// Admin Routes
// =========================

app.use("/api/admin", adminRoutes);
app.use("/api/admin/movies", adminMovieRoutes);

// =========================
// 404
// =========================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// =========================
// Start Server
// =========================

app.listen(PORT, () => {
  console.log(
    `CineBoxBD API running on http://localhost:${PORT}`
  );
});