import MovieCard from "@/components/MovieCard";
import { getMovies, type Movie } from "@/services/movie.service";

type MoviesPageProps = {
  searchParams: Promise<{
    search?: string;
    page?: string;
  }>;
};

export default async function MoviesPage({
  searchParams,
}: MoviesPageProps) {
  const params = await searchParams;

  const search = params.search?.trim() || "";
  const page = Number(params.page) || 1;

  let movies: Movie[] = [];
  let totalPages = 1;

  try {
    const result = await getMovies({
      page,
      limit: 18,
      search: search || undefined,
      sort: "latest",
    });

    movies = result.data || [];
    totalPages = result.pagination?.totalPages || 1;
  } catch (error) {
    console.error("Movies page fetch error:", error);
  }

  return (
    <main className="min-h-screen w-full px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
            CineBoxBD
          </p>

          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            {search ? `Search: ${search}` : "All Movies"}
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            {movies.length > 0
              ? `${movies.length} movie${movies.length === 1 ? "" : "s"} found`
              : "No movies found"}
          </p>
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
          <div className="rounded-xl border border-slate-800 bg-slate-900/70 px-6 py-16 text-center">
            <p className="text-lg font-semibold text-white">
              No movies found
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Try another search term.
            </p>
          </div>
        )}

        {totalPages > 1 && (
          <p className="mt-8 text-center text-sm text-slate-500">
            Page {page} of {totalPages}
          </p>
        )}
      </div>
    </main>
  );
}
