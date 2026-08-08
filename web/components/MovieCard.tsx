import Image from "next/image";

type MovieCardProps = {
  title?: string;
  genre?: string;
  year?: string;
  rating?: string;
};

export default function MovieCard({
  title = "Movie Title",
  genre = "Action • Adventure",
  year = "2026",
  rating = "8.8",
}: MovieCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-red-500 hover:shadow-red-500/20">

      {/* Poster */}
      <div className="relative overflow-hidden">
        <Image
          src="/images/placeholders/movie-placeholder.jpg"
          alt={title}
          width={400}
          height={600}
          className="h-[210px] w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Quality */}
        <span className="absolute left-2.5 top-2.5 rounded-md bg-red-600 px-2 py-1 text-[11px] font-bold text-white shadow-md">
          HD
        </span>

        {/* Rating */}
        <span className="absolute right-2.5 top-2.5 rounded-md bg-yellow-400 px-2 py-1 text-[11px] font-bold text-black shadow-md">
          ⭐ {rating}
        </span>
      </div>

      {/* Details */}
      <div className="space-y-2 p-3">

        <h3 className="truncate text-sm font-bold text-white">
          {title}
        </h3>

        <div className="flex items-center justify-between gap-2 text-[11px] text-slate-400">
          <span className="truncate">{genre}</span>
          <span className="shrink-0">{year}</span>
        </div>

        <button
          type="button"
          className="w-full rounded-lg bg-red-600 py-2 text-xs font-semibold text-white transition hover:bg-red-700"
        >
          View Details
        </button>

      </div>

    </article>
  );
}