const movie = {
  title: "The Last Horizon",
  year: "2026",
  quality: "HD",
  size: "1.8 GB",
  language: "English",
};

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">

        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
            Download
          </p>

          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Download Movie
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
            Choose your preferred quality and download the movie.
          </p>
        </div>

        {/* Movie Card */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">

          <div className="flex flex-col gap-6 p-5 sm:flex-row sm:p-7">

            {/* Poster */}
            <div className="mx-auto w-full max-w-[150px] shrink-0 overflow-hidden rounded-xl border border-slate-800">
              <img
                src="/images/placeholders/movie-placeholder.jpg"
                alt={movie.title}
                className="aspect-[2/3] w-full object-cover"
              />
            </div>

            {/* Movie Info */}
            <div className="flex flex-1 flex-col justify-center text-center sm:text-left">

              <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                <span className="rounded-md bg-red-600 px-2.5 py-1 text-xs font-bold">
                  {movie.quality}
                </span>

                <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-300">
                  {movie.language}
                </span>
              </div>

              <h2 className="mt-3 text-2xl font-bold">
                {movie.title}
              </h2>

              <div className="mt-2 flex flex-wrap justify-center gap-3 text-sm text-slate-400 sm:justify-start">
                <span>{movie.year}</span>
                <span>•</span>
                <span>{movie.size}</span>
              </div>

            </div>
          </div>

          {/* Download Options */}
          <div className="border-t border-slate-800 p-5 sm:p-7">

            <h3 className="text-lg font-bold">
              Download Options
            </h3>

            <div className="mt-4 space-y-3">

              <div className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold">
                    HD Quality
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    1080p • {movie.size}
                  </p>
                </div>

                <button
                  type="button"
                  className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-red-700"
                >
                  Download
                </button>
              </div>

              <div className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold">
                    Standard Quality
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    720p • 900 MB
                  </p>
                </div>

                <button
                  type="button"
                  className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-red-700"
                >
                  Download
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Notice */}
        <div className="mt-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 text-center">
          <p className="text-sm leading-6 text-slate-400">
            Please choose a download option above. Download links will be
            available here.
          </p>
        </div>

      </section>
    </main>
  );
}