const movieService = require("../services/movie.service");

// =========================
// Admin: Create Movie
// =========================

async function createMovie(req, res) {
  try {
    const {
      title,
      slug,
      description,
      posterUrl,
      thumbnailUrl,
      trailerUrl,
      videoUrl,
      releaseDate,
      runtime,
      language,
      rating,
      categoryId,
      genreIds,
    } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        success: false,
        message: "Movie title is required",
      });
    }

    if (!description || !description.trim()) {
      return res.status(400).json({
        success: false,
        message: "Movie description is required",
      });
    }

    if (!categoryId) {
      return res.status(400).json({
        success: false,
        message: "Category is required",
      });
    }

    if (
      releaseDate &&
      Number.isNaN(new Date(releaseDate).getTime())
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid release date",
      });
    }

    if (
      runtime !== undefined &&
      runtime !== null &&
      runtime !== "" &&
      (Number.isNaN(Number(runtime)) || Number(runtime) < 0)
    ) {
      return res.status(400).json({
        success: false,
        message: "Runtime must be a valid positive number",
      });
    }

    if (
      rating !== undefined &&
      rating !== null &&
      rating !== "" &&
      (
        Number.isNaN(Number(rating)) ||
        Number(rating) < 0 ||
        Number(rating) > 10
      )
    ) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 0 and 10",
      });
    }

    if (
      genreIds !== undefined &&
      !Array.isArray(genreIds)
    ) {
      return res.status(400).json({
        success: false,
        message: "genreIds must be an array",
      });
    }

    const movie = await movieService.createMovie({
      title,
      slug,
      description,
      posterUrl,
      thumbnailUrl,
      trailerUrl,
      videoUrl,
      releaseDate,
      runtime,
      language,
      rating,
      categoryId,
      genreIds,
    });

    return res.status(201).json({
      success: true,
      message: "Movie created successfully",
      data: movie,
    });
  } catch (error) {
    console.error("Create movie error:", error);

    if (error.code === "P2002") {
      return res.status(409).json({
        success: false,
        message: "A movie with this slug already exists",
      });
    }

    if (
      error.code === "P2025" ||
      error.code === "P2003"
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid category or genre",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to create movie",
    });
  }
}

// =========================
// Admin: Update Movie
// =========================

async function updateMovie(req, res) {
  try {
    const { slug } = req.params;

    if (!slug) {
      return res.status(400).json({
        success: false,
        message: "Movie slug is required",
      });
    }

    const {
      title,
      newSlug,
      description,
      posterUrl,
      thumbnailUrl,
      trailerUrl,
      videoUrl,
      releaseDate,
      runtime,
      language,
      rating,
      categoryId,
      genreIds,
    } = req.body;

    if (title !== undefined && !title.trim()) {
      return res.status(400).json({
        success: false,
        message: "Movie title cannot be empty",
      });
    }

    if (description !== undefined && !description.trim()) {
      return res.status(400).json({
        success: false,
        message: "Movie description cannot be empty",
      });
    }

    if (
      releaseDate !== undefined &&
      releaseDate !== null &&
      releaseDate !== "" &&
      Number.isNaN(new Date(releaseDate).getTime())
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid release date",
      });
    }

    if (
      runtime !== undefined &&
      runtime !== null &&
      runtime !== "" &&
      (Number.isNaN(Number(runtime)) || Number(runtime) < 0)
    ) {
      return res.status(400).json({
        success: false,
        message: "Runtime must be a valid positive number",
      });
    }

    if (
      rating !== undefined &&
      rating !== null &&
      rating !== "" &&
      (
        Number.isNaN(Number(rating)) ||
        Number(rating) < 0 ||
        Number(rating) > 10
      )
    ) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 0 and 10",
      });
    }

    if (
      genreIds !== undefined &&
      !Array.isArray(genreIds)
    ) {
      return res.status(400).json({
        success: false,
        message: "genreIds must be an array",
      });
    }

    const movie = await movieService.updateMovie(slug, {
      title,
      newSlug,
      description,
      posterUrl,
      thumbnailUrl,
      trailerUrl,
      videoUrl,
      releaseDate,
      runtime,
      language,
      rating,
      categoryId,
      genreIds,
    });

    return res.status(200).json({
      success: true,
      message: "Movie updated successfully",
      data: movie,
    });
  } catch (error) {
    console.error("Update movie error:", error);

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    if (error.code === "P2002") {
      return res.status(409).json({
        success: false,
        message: "A movie with this slug already exists",
      });
    }

    if (
      error.code === "P2003"
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid category or genre",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to update movie",
    });
  }
}

// =========================
// Admin: Delete Movie
// =========================

async function deleteMovie(req, res) {
  try {
    const { slug } = req.params;

    if (!slug) {
      return res.status(400).json({
        success: false,
        message: "Movie slug is required",
      });
    }

    await movieService.deleteMovie(slug);

    return res.status(200).json({
      success: true,
      message: "Movie deleted successfully",
    });
  } catch (error) {
    console.error("Delete movie error:", error);

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to delete movie",
    });
  }
}

module.exports = {
  createMovie,
  updateMovie,
  deleteMovie,
};
