import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    console.error("Download page fetch error:", error);
    notFound();
  }

  const year = movie.releaseDate
    ? new Date(movie.releaseDate).getFullYear().toString()
    : "N/A";

  const poster =
    movie.posterUrl && movie.posterUrl.trim().length > 0
      ? movie.posterUrl
      : "/images/placeholders/movie-placeholder.jpg";

  const genres =
    movie.genres && movie.genres.length > 0
      ? movie.genres.map((genre) => genre.name).join(" • ")
      : "Uncategorized";

  return (
    <main className="min-h-screen w-full px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
            Download
          </p>

          <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Download Movie
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
            Choose an available download option for this movie.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
          <div className="flex flex-col gap-6 p-5 sm:flex-row sm:p-7">
            <div className="relative mx-auto aspect-[2/3] w-full max-w-[170px] shrink-0 overflow-hidden rounded-xl border border-slate-800">
              <Image
                src={poster}
                alt={movie.title}
                fill
                className="object-cover"
                sizes="170px"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center text-center sm:text-left">
              <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                <span className="rounded-md bg-red-600 px-2.5 py-1 text-xs font-bold text-white">
                  HD
                </span>

                <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-300">
                  {movie.language || "N/A"}
                </span>
              </div>

              <h2 className="mt-3 text-2xl font-bold text-white">
                {movie.title}
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                {genres}
              </p>

              <div className="mt-3 flex flex-wrap justify-center gap-3 text-sm text-slate-400 sm:justify-start">
                <span>{year}</span>
                <span>•</span>
                <span>
                  {movie.runtime ? `${movie.runtime} min` : "Runtime N/A"}
                </span>
              </div>

              <div className="mt-6">
                {movie.videoUrl ? (
                  <a
                    href={movie.videoUrl}
                    download
                    className="inline-flex rounded-lg bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
                  >
                    Download Movie
                  </a>
                ) : (
                  <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 px-4 py-4">
                    <p className="text-sm font-semibold text-yellow-400">
                      Download not available
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      A video URL has not been added for this movie yet.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 p-5 sm:p-7">
            <h3 className="text-lg font-bold text-white">
              Download Options
            </h3>

            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-white">
                    Original Video
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Available when a video URL is configured.
                  </p>
                </div>

                {movie.videoUrl ? (
                  <a
                    href={movie.videoUrl}
                    download
                    className="rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-bold text-white transition hover:bg-red-700"
                  >
                    Download
                  </a>
                ) : (
                  <span className="rounded-lg bg-slate-800 px-5 py-2.5 text-center text-sm font-semibold text-slate-500">
                    Unavailable
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-3">
          <Link
            href={`/movies/${movie.slug}`}
            className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-red-500 hover:text-white"
          >
            ← Movie Details
          </Link>

          <Link
            href="/movies"
            className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-red-500 hover:text-white"
          >
            More Movies
          </Link>
        </div>

        <div className="mt-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 text-center">
          <p className="text-sm leading-6 text-slate-400">
            Download links appear automatically when a valid video URL is
            configured in the backend.
          </p>
        </div>
      </section>
    </main>
  );
}
