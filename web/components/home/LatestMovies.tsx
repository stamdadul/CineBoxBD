import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/home/Pagination";

const latestMovies = [
  {
    title: "Latest Movie 01",
    genre: "Action • Thriller",
    year: "2026",
    rating: "9.0",
  },
  {
    title: "Latest Movie 02",
    genre: "Drama • Romance",
    year: "2026",
    rating: "8.8",
  },
  {
    title: "Latest Movie 03",
    genre: "Adventure • Sci-Fi",
    year: "2026",
    rating: "8.7",
  },
  {
    title: "Latest Movie 04",
    genre: "Crime • Thriller",
    year: "2026",
    rating: "8.6",
  },
  {
    title: "Latest Movie 05",
    genre: "Action • Adventure",
    year: "2026",
    rating: "8.5",
  },
  {
    title: "Latest Movie 06",
    genre: "Horror • Thriller",
    year: "2026",
    rating: "8.4",
  },
  {
    title: "Latest Movie 07",
    genre: "Romance • Drama",
    year: "2026",
    rating: "8.3",
  },
  {
    title: "Latest Movie 08",
    genre: "Action • Crime",
    year: "2026",
    rating: "8.2",
  },
  {
    title: "Latest Movie 09",
    genre: "Sci-Fi • Adventure",
    year: "2026",
    rating: "8.1",
  },
  {
    title: "Latest Movie 10",
    genre: "Comedy • Drama",
    year: "2026",
    rating: "8.0",
  },
  {
    title: "Latest Movie 11",
    genre: "Action • Thriller",
    year: "2026",
    rating: "7.9",
  },
  {
    title: "Latest Movie 12",
    genre: "Horror • Mystery",
    year: "2026",
    rating: "7.8",
  },
  {
    title: "Latest Movie 13",
    genre: "Drama • Romance",
    year: "2026",
    rating: "7.7",
  },
  {
    title: "Latest Movie 14",
    genre: "Adventure • Action",
    year: "2026",
    rating: "7.6",
  },
  {
    title: "Latest Movie 15",
    genre: "Crime • Thriller",
    year: "2026",
    rating: "7.5",
  },
  {
    title: "Latest Movie 16",
    genre: "Comedy • Romance",
    year: "2026",
    rating: "7.4",
  },
  {
    title: "Latest Movie 17",
    genre: "Sci-Fi • Action",
    year: "2026",
    rating: "7.3",
  },
  {
    title: "Latest Movie 18",
    genre: "Drama • Mystery",
    year: "2026",
    rating: "7.2",
  },
];

export default function LatestMovies() {
  return (
    <section className="bg-slate-950 px-4 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-7 flex items-center gap-4">
          <div className="h-px flex-1 bg-red-600/60" />

          <div className="shrink-0 text-center">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
              Recently Added
            </p>

            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Latest Movies
            </h2>
          </div>

          <div className="h-px flex-1 bg-red-600/60" />
        </div>

        {/* 6 Movies × 3 Rows */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {latestMovies.map((movie) => (
            <MovieCard
              key={movie.title}
              title={movie.title}
              genre={movie.genre}
              year={movie.year}
              rating={movie.rating}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <Pagination />
        </div>

      </div>
    </section>
  );
}