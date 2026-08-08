const prisma = require("../lib/prisma");

async function getAllCategories() {
  return prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });
}

async function getCategoryBySlug(slug) {
  return prisma.category.findUnique({
    where: {
      slug,
    },
  });
}

module.exports = {
  getAllCategories,
  getCategoryBySlug,
};