import Image from "next/image";
import Link from "next/link";
import { getMovieBySlug } from "@/services/movie.service";

type DownloadPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DownloadPage({
  params,
}: DownloadPageProps) {
  const { id } = await params;

  let movie;

  try {
    movie = await getMovieBySlug(id);
  } catch (error) {
    console.error("Download movie fetch error:", error);

    return (
      <main className="min-h-screen bg-slate-950 px-4 py-16 text-white">
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
          <h1 className="text-2xl font-bold">Movie Not Found</h1>
          <p className="mt-3 text-sm text-slate-400">
            We could not load this movie right now.
          </p>

          <Link
            href="/movies"
            className="mt-6 inline-block rounded-lg bg-red-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-red-700"
          >
            Back to Movies
          </Link>
        </div>
      </main>
    );
  }

  const year = movie.releaseDate
    ? new Date(movie.releaseDate).getFullYear().toString()
    : "N/A";

  const posterUrl =
    movie.posterUrl && movie.posterUrl.trim().length > 0
      ? movie.posterUrl
      : "/images/placeholders/movie-placeholder.jpg";

  const genres =
    movie.genres && movie.genres.length > 0
      ? movie.genres.map((genre) => genre.name).join(" • ")
      : "Uncategorized";

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-white sm:px-6">
      <section className="mx-auto w-full max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
            Download
          </p>

          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Download Movie
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
            Download {movie.title}.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
          <div className="flex flex-col gap-6 p-5 sm:flex-row sm:p-7">
            <div className="mx-auto w-full max-w-[180px] shrink-0 overflow-hidden rounded-xl border border-slate-800">
              <Image
                src={posterUrl}
                alt={movie.title}
                width={400}
                height={600}
                className="aspect-[2/3] w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center text-center sm:text-left">
              <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                <span className="rounded-md bg-red-600 px-2.5 py-1 text-xs font-bold">
                  HD
                </span>

                {movie.language && (
                  <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-300">
                    {movie.language}
                  </span>
                )}
              </div>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                {movie.title}
              </h2>

              <div className="mt-2 flex flex-wrap justify-center gap-3 text-sm text-slate-400 sm:justify-start">
                <span>{year}</span>
                <span>•</span>
                <span>{genres}</span>
              </div>

              {movie.runtime && (
                <p className="mt-2 text-sm text-slate-500">
                  Runtime: {movie.runtime} minutes
                </p>
              )}

              {movie.description && (
                <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-400">
                  {movie.description}
                </p>
              )}
            </div>
          </div>

          <div className="border-t border-slate-800 p-5 sm:p-7">
            <h3 className="text-lg font-bold">
              Download Options
            </h3>

            <div className="mt-4 space-y-3">
              {movie.videoUrl ? (
                <div className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold">
                      HD Quality
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Available video
                    </p>
                  </div>

                  <a
                    href={movie.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-bold text-white transition hover:bg-red-700"
                  >
                    Download
                  </a>
                </div>
              ) : (
                <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5 text-center">
                  <p className="font-semibold text-yellow-400">
                    Download link is not available yet.
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    Please check back later.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 text-center">
          <Link
            href={`/movies/${movie.slug}`}
            className="text-sm font-semibold text-slate-400 transition hover:text-white"
          >
            ← Back to Movie Details
          </Link>
        </div>
      </section>
    </main>
  );
}
