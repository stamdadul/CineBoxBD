import MovieCard from "@/components/MovieCard";

const trendingMovies = [
  {
    title: "Trending Movie 01",
    genre: "Action • Thriller",
    year: "2026",
    rating: "9.1",
  },
  {
    title: "Trending Movie 02",
    genre: "Adventure • Sci-Fi",
    year: "2026",
    rating: "8.9",
  },
  {
    title: "Trending Movie 03",
    genre: "Drama • Romance",
    year: "2026",
    rating: "8.7",
  },
  {
    title: "Trending Movie 04",
    genre: "Action • Adventure",
    year: "2026",
    rating: "8.6",
  },
  {
    title: "Trending Movie 05",
    genre: "Crime • Thriller",
    year: "2026",
    rating: "8.5",
  },
];

export default function TrendingSection() {
  return (
    <section className="bg-slate-950 px-4 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-7 flex items-center gap-4">
          <div className="h-px flex-1 bg-red-600/60" />

          <div className="shrink-0 text-center">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
              Popular Now
            </p>

            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Trending Movies
            </h2>
          </div>

          <div className="h-px flex-1 bg-red-600/60" />

          <button
            type="button"
            className="hidden shrink-0 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-red-500 hover:bg-red-600 hover:text-white sm:block"
          >
            View All
          </button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {trendingMovies.map((movie) => (
            <MovieCard
              key={movie.title}
              title={movie.title}
              genre={movie.genre}
              year={movie.year}
              rating={movie.rating}
            />
          ))}
        </div>

      </div>
    </section>
  );
}