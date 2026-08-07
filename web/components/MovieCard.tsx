import Image from "next/image";

export default function MovieCard() {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-red-500/20">

      {/* Movie Poster */}
      <div className="relative overflow-hidden">

        <Image
          src="/images/placeholders/movie-placeholder.jpg"
          alt="Movie Poster"
          width={400}
          height={600}
          className="h-[340px] w-full object-cover transition duration-500 group-hover:scale-110"
          priority={false}
        />

        {/* Quality Badge */}
        <span className="absolute left-3 top-3 rounded-md bg-red-600 px-2 py-1 text-xs font-bold text-white">
          HD
        </span>

        {/* Rating Badge */}
        <span className="absolute right-3 top-3 rounded-md bg-yellow-400 px-2 py-1 text-xs font-bold text-black">
          ⭐ 8.8
        </span>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/30" />
      </div>

      {/* Movie Info */}
      <div className="space-y-3 p-4">

        <h3 className="line-clamp-1 text-lg font-bold text-white">
          Movie Title
        </h3>

        <div className="flex items-center justify-between text-sm text-slate-400">
          <span>Action</span>
          <span>2026</span>
        </div>

        <button className="w-full rounded-lg bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700">
          View Details
        </button>

      </div>

    </div>
  );
}