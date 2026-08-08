type MovieInfoProps = {
  year: string;
  genre: string;
  runtime: string;
  language: string;
  rating: string;
};

export default function MovieInfo({
  year,
  genre,
  runtime,
  language,
  rating,
}: MovieInfoProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
        <h2 className="text-lg font-bold text-white">
          Movie Information
        </h2>

        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <div>
            <p className="text-xs text-slate-500">Year</p>
            <p className="mt-1 text-sm font-semibold text-white">{year}</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">Genre</p>
            <p className="mt-1 text-sm font-semibold text-white">{genre}</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">Runtime</p>
            <p className="mt-1 text-sm font-semibold text-white">{runtime}</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">Language</p>
            <p className="mt-1 text-sm font-semibold text-white">{language}</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">Rating</p>
            <p className="mt-1 text-sm font-semibold text-white">
              ⭐ {rating}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}