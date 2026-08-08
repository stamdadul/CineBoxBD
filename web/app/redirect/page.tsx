const movie = {
  title: "The Last Horizon",
  year: "2026",
  genre: "Action • Thriller",
};

export default function RedirectPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center px-4 py-10 sm:px-6">

        <div className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center shadow-xl sm:p-10">

          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600/10 text-3xl">
            ⏳
          </div>

          {/* Heading */}
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
            Preparing Download
          </p>

          <h1 className="mt-2 text-2xl font-extrabold sm:text-3xl">
            Please Wait...
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-400 sm:text-base">
            Your download link is being prepared. Please wait a moment before
            continuing.
          </p>

          {/* Movie */}
          <div className="mx-auto mt-7 max-w-md rounded-xl border border-slate-800 bg-slate-950 p-4">
            <h2 className="text-lg font-bold">
              {movie.title}
            </h2>

            <div className="mt-2 flex flex-wrap justify-center gap-3 text-xs text-slate-500">
              <span>{movie.year}</span>
              <span>•</span>
              <span>{movie.genre}</span>
            </div>
          </div>

          {/* Progress */}
          <div className="mx-auto mt-7 max-w-md">
            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-2/3 rounded-full bg-red-600" />
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Preparing your download link...
            </p>
          </div>

          {/* Continue */}
          <button
            type="button"
            className="mt-7 rounded-lg bg-red-600 px-7 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            Continue to Download
          </button>

          {/* Back */}
          <div className="mt-4">
            <button
              type="button"
              className="text-sm font-medium text-slate-500 transition hover:text-white"
            >
              ← Back to Movie
            </button>
          </div>

        </div>

      </section>
    </main>
  );
}