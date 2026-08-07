import MovieCard from "@/components/MovieCard";

export default function MovieGrid() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold text-white">
            Latest Movies
          </h2>

          <button className="rounded-lg border border-red-600 px-5 py-2 text-red-500 transition hover:bg-red-600 hover:text-white">
            View All
          </button>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">

          {Array.from({ length: 10 }).map((_, index) => (
            <MovieCard key={index} />
          ))}

        </div>

      </div>
    </section>
  );
}