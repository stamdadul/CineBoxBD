export default function SimilarMovies() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mb-5 flex items-center gap-4">
        <div className="h-px flex-1 bg-red-600/60" />

        <h2 className="shrink-0 text-xl font-bold text-white sm:text-2xl">
          Similar Movies
        </h2>

        <div className="h-px flex-1 bg-red-600/60" />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900"
          >
            <img
              src="/images/placeholders/movie-placeholder.jpg"
              alt={`Similar Movie ${item}`}
              className="h-[220px] w-full object-cover"
            />

            <div className="p-3">
              <h3 className="truncate text-sm font-bold text-white">
                Similar Movie {item}
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                2026 • Action
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}