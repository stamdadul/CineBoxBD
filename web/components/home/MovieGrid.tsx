import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/home/Pagination";

const latestMovies = [
  {
    title: "Latest Movie 01",
    genre: "Action • Drama",
    year: "2026",
    rating: "8.8",
  },
  {
    title: "Latest Movie 02",
    genre: "Comedy • Romance",
    year: "2026",
    rating: "8.5",
  },
  {
    title: "Latest Movie 03",
    genre: "Thriller • Crime",
    year: "2026",
    rating: "8.7",
  },
  {
    title: "Latest Movie 04",
    genre: "Sci-Fi • Adventure",
    year: "2026",
    rating: "9.0",
  },
  {
    title: "Latest Movie 05",
    genre: "Horror • Mystery",
    year: "2026",
    rating: "8.3",
  },
  {
    title: "Latest Movie 06",
    genre: "Action • Thriller",
    year: "2026",
    rating: "8.6",
  },
  {
    title: "Latest Movie 07",
    genre: "Drama • Romance",
    year: "2026",
    rating: "8.4",
  },
  {
    title: "Latest Movie 08",
    genre: "Adventure • Fantasy",
    year: "2026",
    rating: "8.9",
  },
  {
    title: "Latest Movie 09",
    genre: "Crime • Drama",
    year: "2026",
    rating: "8.2",
  },
  {
    title: "Latest Movie 10",
    genre: "Action • Sci-Fi",
    year: "2026",
    rating: "8.7",
  },
];

export default function MovieGrid() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-red-500">
            Fresh Releases
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Latest Movies
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            আমাদের সর্বশেষ যুক্ত হওয়া মুভি ও কনটেন্ট।
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {latestMovies.map((movie) => (
            <MovieCard
              key={movie.title}
              title={movie.title}
              genre={movie.genre}
              year={movie.year}
              rating={movie.rating}
            />
          ))}
        </div>

        <div className="mt-12">
          <Pagination />
        </div>

      </div>
    </section>
  );
}