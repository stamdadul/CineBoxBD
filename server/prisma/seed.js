require("dotenv/config");

const bcrypt = require("bcryptjs");
const { PrismaPg } = require("@prisma/adapter-pg");
const { PrismaClient } = require("@prisma/client");

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log("🌱 Starting database seed...");

  // =========================
  // Categories
  // =========================

  const moviesCategory = await prisma.category.upsert({
    where: {
      slug: "movies",
    },
    update: {},
    create: {
      name: "Movies",
      slug: "movies",
    },
  });

  const seriesCategory = await prisma.category.upsert({
    where: {
      slug: "series",
    },
    update: {},
    create: {
      name: "Series",
      slug: "series",
    },
  });

  const animeCategory = await prisma.category.upsert({
    where: {
      slug: "anime",
    },
    update: {},
    create: {
      name: "Anime",
      slug: "anime",
    },
  });

  // =========================
  // Genres
  // =========================

  const action = await prisma.genre.upsert({
    where: {
      slug: "action",
    },
    update: {},
    create: {
      name: "Action",
      slug: "action",
    },
  });

  const adventure = await prisma.genre.upsert({
    where: {
      slug: "adventure",
    },
    update: {},
    create: {
      name: "Adventure",
      slug: "adventure",
    },
  });

  const comedy = await prisma.genre.upsert({
    where: {
      slug: "comedy",
    },
    update: {},
    create: {
      name: "Comedy",
      slug: "comedy",
    },
  });

  const drama = await prisma.genre.upsert({
    where: {
      slug: "drama",
    },
    update: {},
    create: {
      name: "Drama",
      slug: "drama",
    },
  });

  const horror = await prisma.genre.upsert({
    where: {
      slug: "horror",
    },
    update: {},
    create: {
      name: "Horror",
      slug: "horror",
    },
  });

  const romance = await prisma.genre.upsert({
    where: {
      slug: "romance",
    },
    update: {},
    create: {
      name: "Romance",
      slug: "romance",
    },
  });

  const thriller = await prisma.genre.upsert({
    where: {
      slug: "thriller",
    },
    update: {},
    create: {
      name: "Thriller",
      slug: "thriller",
    },
  });

  const sciFi = await prisma.genre.upsert({
    where: {
      slug: "sci-fi",
    },
    update: {},
    create: {
      name: "Sci-Fi",
      slug: "sci-fi",
    },
  });

  // =========================
  // Admin Password
  // =========================

  const adminPassword = "postgresql";

  const passwordHash = await bcrypt.hash(adminPassword, 10);

  // =========================
  // Admin
  // =========================

  const admin = await prisma.user.upsert({
    where: {
      email: "admin@cineboxbd.com",
    },
    update: {
      name: "CineBoxBD Admin",
      passwordHash,
      role: "ADMIN",
    },
    create: {
      name: "CineBoxBD Admin",
      email: "admin@cineboxbd.com",
      passwordHash,
      role: "ADMIN",
    },
  });

  // =========================
  // Movies
  // =========================

  const movie1 = await prisma.movie.upsert({
    where: {
      slug: "sample-action-movie",
    },
    update: {},
    create: {
      title: "Sample Action Movie",
      slug: "sample-action-movie",
      description:
        "A sample action movie used for CineBoxBD development and testing.",
      posterUrl: "/images/movies/sample-action.jpg",
      thumbnailUrl: "/images/movies/sample-action-thumb.jpg",
      releaseDate: new Date("2026-01-15"),
      runtime: 125,
      language: "English",
      rating: 8.2,
      categoryId: moviesCategory.id,
      genres: {
        connect: [
          { id: action.id },
          { id: adventure.id },
          { id: thriller.id },
        ],
      },
    },
  });

  const movie2 = await prisma.movie.upsert({
    where: {
      slug: "sample-comedy-movie",
    },
    update: {},
    create: {
      title: "Sample Comedy Movie",
      slug: "sample-comedy-movie",
      description:
        "A sample comedy movie used for CineBoxBD development and testing.",
      posterUrl: "/images/movies/sample-comedy.jpg",
      thumbnailUrl: "/images/movies/sample-comedy-thumb.jpg",
      releaseDate: new Date("2026-02-20"),
      runtime: 110,
      language: "English",
      rating: 7.5,
      categoryId: moviesCategory.id,
      genres: {
        connect: [
          { id: comedy.id },
          { id: drama.id },
          { id: romance.id },
        ],
      },
    },
  });

  const movie3 = await prisma.movie.upsert({
    where: {
      slug: "sample-horror-movie",
    },
    update: {},
    create: {
      title: "Sample Horror Movie",
      slug: "sample-horror-movie",
      description:
        "A sample horror movie used for CineBoxBD development and testing.",
      posterUrl: "/images/movies/sample-horror.jpg",
      thumbnailUrl: "/images/movies/sample-horror-thumb.jpg",
      releaseDate: new Date("2026-03-10"),
      runtime: 102,
      language: "English",
      rating: 7.8,
      categoryId: moviesCategory.id,
      genres: {
        connect: [
          { id: horror.id },
          { id: thriller.id },
          { id: drama.id },
        ],
      },
    },
  });

  const movie4 = await prisma.movie.upsert({
    where: {
      slug: "sample-sci-fi-movie",
    },
    update: {},
    create: {
      title: "Sample Sci-Fi Movie",
      slug: "sample-sci-fi-movie",
      description:
        "A sample science-fiction movie used for CineBoxBD development and testing.",
      posterUrl: "/images/movies/sample-sci-fi.jpg",
      thumbnailUrl: "/images/movies/sample-sci-fi-thumb.jpg",
      releaseDate: new Date("2026-04-05"),
      runtime: 118,
      language: "English",
      rating: 8.0,
      categoryId: moviesCategory.id,
      genres: {
        connect: [
          { id: sciFi.id },
          { id: action.id },
          { id: adventure.id },
        ],
      },
    },
  });

  console.log("");
  console.log("✅ Categories created: 3");
  console.log("✅ Genres created: 8");
  console.log(`✅ Admin created: ${admin.email}`);
  console.log("✅ Admin password configured successfully");
  console.log("✅ Movies created: 4");
  console.log("");
  console.log("🌱 Database seed completed successfully.");
}

main()
  .catch((error) => {
    console.error("");
    console.error("❌ Database seed failed:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });