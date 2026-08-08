type MovieHeroProps = {
  title: string;
  year: string;
  genre: string;
  runtime: string;
  rating: string;
  quality: string;
  language: string;
  description: string;
};

export default function MovieHero({
  title,
  year,
  genre,
  runtime,
  rating,
  quality,
  language,
  description,
}: MovieHeroProps) {
  return (
    <section className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">

          {/* Poster */}
          <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
            <img
              src="/images/placeholders/movie-placeholder.jpg"
              alt={title}
              className="aspect-[2/3] h-auto w-full object-cover"
            />
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-red-600 px-2.5 py-1 text-xs font-bold text-white">
                {quality}
              </span>

              <span className="rounded-md bg-yellow-400 px-2.5 py-1 text-xs font-bold text-black">
                ⭐ {rating}
              </span>

              <span className="rounded-md border border-slate-700 px-2.5 py-1 text-xs text-slate-300">
                {language}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-400">
              <span>{year}</span>
              <span>•</span>
              <span>{runtime}</span>
              <span>•</span>
              <span>{genre}</span>
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              {description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}