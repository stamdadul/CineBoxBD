import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMovieBySlug } from "@/services/movie.service";

type MovieDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MovieDetailsPage({
  params,
}: MovieDetailsPageProps) {
  const { id } = await params;

  let movie;

  try {
    movie = await getMovieBySlug(id);
  } catch (error) {
    console.error("Movie details fetch error:", error);
    notFound();
  }

  const year = movie.releaseDate
    ? new Date(movie.releaseDate).getFullYear().toString()
    : "N/A";

  const rating =
    movie.rating !== null && movie.rating !== undefined
      ? Number(movie.rating).toFixed(1)
      : "N/A";

  const genres =
    movie.genres && movie.genres.length > 0
      ? movie.genres.map((genre) => genre.name).join(" • ")
      : "Uncategorized";

  const poster =
    movie.posterUrl && movie.posterUrl.trim().length > 0
      ? movie.posterUrl
      : "/images/placeholders/movie-placeholder.jpg";

  return (
    <main className="min-h-screen w-full px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/movies"
          className="mb-6 inline-flex items-center text-sm font-semibold text-slate-400 transition hover:text-red-400"
        >
          ← Back to Movies
        </Link>

        <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl">
          <div className="grid gap-0 md:grid-cols-[280px_1fr]">
            <div className="relative min-h-[400px] bg-slate-950">
              <Image
                src={poster}
                alt={movie.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 280px"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-red-600 px-2.5 py-1 text-xs font-bold text-white">
                  HD
                </span>

                <span className="rounded-md bg-yellow-400 px-2.5 py-1 text-xs font-bold text-black">
                  ⭐ {rating}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-white sm:text-4xl">
                {movie.title}
              </h1>

              <p className="mt-3 text-sm text-slate-400">
                {genres}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Year
                  </p>
                  <p className="mt-1 font-semibold text-white">
                    {year}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Runtime
                  </p>
                  <p className="mt-1 font-semibold text-white">
                    {movie.runtime ? `${movie.runtime} min` : "N/A"}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Language
                  </p>
                  <p className="mt-1 font-semibold text-white">
                    {movie.language || "N/A"}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Category
                  </p>
                  <p className="mt-1 truncate font-semibold text-white">
                    {movie.category?.name || "N/A"}
                  </p>
                </div>
              </div>

              {movie.description && (
                <div className="mt-7">
                  <h2 className="mb-2 text-lg font-bold text-white">
                    Description
                  </h2>

                  <p className="leading-7 text-slate-300">
                    {movie.description}
                  </p>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                {movie.videoUrl && (
                  <Link
                    href={movie.videoUrl}
                    className="rounded-lg bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
                  >
                    ▶ Watch Movie
                  </Link>
                )}

                {movie.trailerUrl && (
                  <Link
                    href={movie.trailerUrl}
                    target="_blank"
                    className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-bold text-slate-200 transition hover:border-red-500 hover:text-white"
                  >
                    Watch Trailer
                  </Link>
                )}

                <Link
                  href="/movies"
                  className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-bold text-slate-300 transition hover:border-slate-500 hover:text-white"
                >
                  More Movies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
