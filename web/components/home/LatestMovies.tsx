import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/home/Pagination";
import { getMovies, type Movie } from "@/services/movie.service";

type LatestMoviesProps = {
  page?: number;
};

export default async function LatestMovies({
  page = 1,
}: LatestMoviesProps) {
  let movies: Movie[] = [];
  let totalPages = 1;

  try {
    const result = await getMovies({
      page,
      limit: 18,
      sort: "latest",
    });

    movies = result.data || [];
    totalPages = result.pagination?.totalPages || 1;
  } catch (error) {
    console.error("Latest movies fetch error:", error);
  }

  return (
    <section className="w-full">
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

      {movies.length > 0 ? (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
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
            No movies available right now.
          </p>
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination />
        </div>
      )}
    </section>
  );
}
