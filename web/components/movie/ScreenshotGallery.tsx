export default function ScreenshotGallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-5 flex items-center gap-4">
        <div className="h-px flex-1 bg-red-600/60" />

        <h2 className="shrink-0 text-xl font-bold text-white sm:text-2xl">
          Screenshots
        </h2>

        <div className="h-px flex-1 bg-red-600/60" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900"
          >
            <img
              src="/images/placeholders/movie-placeholder.jpg"
              alt={`Screenshot ${item}`}
              className="aspect-video w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}