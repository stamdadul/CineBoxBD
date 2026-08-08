const prisma = require("../lib/prisma");

async function getAllGenres() {
  return prisma.genre.findMany({
    orderBy: {
      name: "asc",
    },
  });
}

async function getGenreBySlug(slug) {
  return prisma.genre.findUnique({
    where: {
      slug,
    },
  });
}

module.exports = {
  getAllGenres,
  getGenreBySlug,
};