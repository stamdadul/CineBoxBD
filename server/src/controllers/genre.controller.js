const genreService = require("../services/genre.service");

async function getGenres(req, res) {
  try {
    const genres = await genreService.getAllGenres();

    res.status(200).json({
      success: true,
      count: genres.length,
      data: genres,
    });
  } catch (error) {
    console.error("Get genres error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch genres",
    });
  }
}

async function getGenre(req, res) {
  try {
    const { slug } = req.params;

    const genre = await genreService.getGenreBySlug(slug);

    if (!genre) {
      return res.status(404).json({
        success: false,
        message: "Genre not found",
      });
    }

    res.status(200).json({
      success: true,
      data: genre,
    });
  } catch (error) {
    console.error("Get genre error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch genre",
    });
  }
}

module.exports = {
  getGenres,
  getGenre,
};