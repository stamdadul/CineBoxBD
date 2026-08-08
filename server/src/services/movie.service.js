const prisma = require("../lib/prisma");

// =========================
// Get All Movies
// =========================

async function getAllMovies(options = {}) {
  const page = Math.max(Number(options.page) || 1, 1);

  const limit = Math.min(
    Math.max(Number(options.limit) || 12, 1),
    50
  );

  const search =
    typeof options.search === "string"
      ? options.search.trim()
      : "";

  const category =
    typeof options.category === "string"
      ? options.category.trim()
      : "";

  const genre =
    typeof options.genre === "string"
      ? options.genre.trim()
      : "";

  const sort =
    typeof options.sort === "string"
      ? options.sort.trim().toLowerCase()
      : "latest";

  const skip = (page - 1) * limit;

  // =========================
  // Filters
  // =========================

  const where = {};

  if (search) {
    where.OR = [
      {
        title: {
          contains: search,
          mode: "insensitive",
        },
      },
      {
        description: {
          contains: search,
          mode: "insensitive",
        },
      },
    ];
  }

  if (category) {
    where.category = {
      slug: category,
    };
  }

  if (genre) {
    where.genres = {
      some: {
        slug: genre,
      },
    };
  }

  // =========================
  // Sorting
  // =========================

  let orderBy;

  switch (sort) {
    case "oldest":
      orderBy = {
        createdAt: "asc",
      };
      break;

    case "rating":
      orderBy = [
        {
          rating: "desc",
        },
        {
          createdAt: "desc",
        },
      ];
      break;

    case "title":
      orderBy = {
        title: "asc",
      };
      break;

    case "latest":
    default:
      orderBy = {
        createdAt: "desc",
      };
      break;
  }

  // =========================
  // Database Query
  // =========================

  const [movies, total] = await Promise.all([
    prisma.movie.findMany({
      where,
      skip,
      take: limit,

      include: {
        category: true,
        genres: true,
      },

      orderBy,
    }),

    prisma.movie.count({
      where,
    }),
  ]);

  const totalPages = Math.ceil(total / limit);

  return {
    movies,

    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  };
}

// =========================
// Get Movie By Slug
// =========================

async function getMovieBySlug(slug) {
  return prisma.movie.findUnique({
    where: {
      slug,
    },

    include: {
      category: true,
      genres: true,
    },
  });
}

// =========================
// Create Movie
// =========================

async function createMovie(data) {
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
    genreIds = [],
  } = data;

  // Generate slug if not provided
  const movieSlug =
    slug && slug.trim()
      ? slug.trim().toLowerCase()
      : title
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");

  const movie = await prisma.movie.create({
    data: {
      title: title.trim(),
      slug: movieSlug,
      description: description.trim(),

      posterUrl: posterUrl || null,
      thumbnailUrl: thumbnailUrl || null,
      trailerUrl: trailerUrl || null,
      videoUrl: videoUrl || null,

      releaseDate: releaseDate
        ? new Date(releaseDate)
        : null,

      runtime:
        runtime !== undefined &&
        runtime !== null &&
        runtime !== ""
          ? Number(runtime)
          : null,

      language: language || "English",

      rating:
        rating !== undefined &&
        rating !== null &&
        rating !== ""
          ? Number(rating)
          : null,

      categoryId,

      genres:
        genreIds.length > 0
          ? {
              connect: genreIds.map((id) => ({
                id,
              })),
            }
          : undefined,
    },

    include: {
      category: true,
      genres: true,
    },
  });

  return movie;
}

// =========================
// Update Movie
// =========================

async function updateMovie(slug, data) {
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
  } = data;

  // =========================
  // Prepare Update Data
  // =========================

  const updateData = {};

  if (title !== undefined) {
    updateData.title = title.trim();
  }

  if (newSlug !== undefined && newSlug !== null) {
    const cleanedSlug = newSlug.trim();

    if (cleanedSlug) {
      updateData.slug = cleanedSlug.toLowerCase();
    }
  }

  if (description !== undefined) {
    updateData.description = description.trim();
  }

  if (posterUrl !== undefined) {
    updateData.posterUrl = posterUrl || null;
  }

  if (thumbnailUrl !== undefined) {
    updateData.thumbnailUrl = thumbnailUrl || null;
  }

  if (trailerUrl !== undefined) {
    updateData.trailerUrl = trailerUrl || null;
  }

  if (videoUrl !== undefined) {
    updateData.videoUrl = videoUrl || null;
  }

  if (releaseDate !== undefined) {
    updateData.releaseDate =
      releaseDate === null || releaseDate === ""
        ? null
        : new Date(releaseDate);
  }

  if (runtime !== undefined) {
    updateData.runtime =
      runtime === null || runtime === ""
        ? null
        : Number(runtime);
  }

  if (language !== undefined) {
    updateData.language = language || null;
  }

  if (rating !== undefined) {
    updateData.rating =
      rating === null || rating === ""
        ? null
        : Number(rating);
  }

  if (categoryId !== undefined) {
    updateData.categoryId = categoryId;
  }

  // =========================
  // Update Movie
  // =========================

  const movie = await prisma.movie.update({
    where: {
      slug,
    },

    data: {
      ...updateData,

      ...(genreIds !== undefined
        ? {
            genres: {
              set: genreIds.map((id) => ({
                id,
              })),
            },
          }
        : {}),
    },

    include: {
      category: true,
      genres: true,
    },
  });

  return movie;
}

// =========================
// Delete Movie
// =========================

async function deleteMovie(slug) {
  return prisma.movie.delete({
    where: {
      slug,
    },
  });
}

// =========================
// Exports
// =========================

module.exports = {
  getAllMovies,
  getMovieBySlug,
  createMovie,
  updateMovie,
  deleteMovie,
};