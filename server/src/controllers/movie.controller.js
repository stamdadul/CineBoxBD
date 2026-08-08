const movieService = require("../services/movie.service");

async function getMovies(req, res) {
  try {
    const {
      page,
      limit,
      search,
      category,
      genre,
      sort,
    } = req.query;

    const result = await movieService.getAllMovies({
      page,
      limit,
      search,
      category,
      genre,
      sort,
    });

    res.status(200).json({
      success: true,
      count: result.movies.length,
      pagination: result.pagination,
      data: result.movies,
    });
  } catch (error) {
    console.error("Get movies error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch movies",
    });
  }
}

async function getMovie(req, res) {
  try {
    const { slug } = req.params;

    const movie = await movieService.getMovieBySlug(slug);

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    res.status(200).json({
      success: true,
      data: movie,
    });
  } catch (error) {
    console.error("Get movie error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch movie",
    });
  }
}

module.exports = {
  getMovies,
  getMovie,
};