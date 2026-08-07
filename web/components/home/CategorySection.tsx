const categories = [
  "Home",
  "Bangla",
  "English",
  "Hindi",
  "Dual Audio",
  "Anime",
  "K-Drama",
  "Netflix",
  "Action",
  "Comedy",
  "Thriller",
  "Horror",
  "Romance",
  "Sci-Fi",
  "Adventure",
  "Web Series",
  "Trending",
  "Latest",
];

export default function CategorySection() {
  return (
    <section className="bg-slate-950 py-10">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-6 text-center text-3xl font-bold text-white">
          Browse Categories
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((item) => (
            <button
              key={item}
              className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-sm font-medium text-slate-300 transition hover:border-red-500 hover:bg-red-600 hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}