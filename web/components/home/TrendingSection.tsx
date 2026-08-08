import MovieCard from "@/components/MovieCard";
import { getMovies, type Movie } from "@/services/movie.service";

export default async function TrendingSection() {
  let movies: Movie[] = [];

  try {
    const result = await getMovies({
      page: 1,
      limit: 5,
      sort: "rating",
    });

    movies = result.data || [];
  } catch (error) {
    console.error("Trending movies fetch error:", error);
  }

  return (
    <section className="w-full">
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

      {movies.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies.map((movie) => {
            const year = movie.releaseDate
              ? new Date(movie.releaseDate).getFullYear().toString()
              : "N/A";

            const genre =
              movie.genres && movie.genres.length > 0
                ? movie.genres.map((item) => item.name).join(" • ")
                : "Uncategorized";

            const rating =
              movie.rating !== null && movie.rating !== undefined
                ? Number(movie.rating).toFixed(1)
                : "N/A";

            return (
              <MovieCard
                key={movie.id}
                title={movie.title}
                genre={genre}
                year={year}
                rating={rating}
                slug={movie.slug}
                posterUrl={movie.posterUrl}
              />
            );
          })}
        </div>
      ) : (
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 px-6 py-12 text-center">
          <p className="text-sm text-slate-400">
            No trending movies available right now.
          </p>
        </div>
      )}
    </section>
  );
}
