const categories = [
  { name: "Home", icon: "🏠" },
  { name: "Bangla", icon: "🇧🇩" },
  { name: "English", icon: "🇬🇧" },
  { name: "Hindi", icon: "🇮🇳" },
  { name: "Dual Audio", icon: "🎧" },
  { name: "Anime", icon: "🎌" },
  { name: "K-Drama", icon: "🎭" },
  { name: "Netflix", icon: "▶️" },
  { name: "Action", icon: "💥" },
  { name: "Comedy", icon: "😂" },
  { name: "Thriller", icon: "🔪" },
  { name: "Horror", icon: "👻" },
  { name: "Romance", icon: "❤️" },
  { name: "Sci-Fi", icon: "🚀" },
  { name: "Adventure", icon: "🗺️" },
  { name: "Web Series", icon: "📺" },
  { name: "Trending", icon: "🔥" },
  { name: "Latest", icon: "🆕" },
  { name: "18+", icon: "🔞" },
  { name: "Suspense", icon: "🕵️" },
];

const categoryStyles = [
  "border-red-500/40 bg-red-500/10 text-red-400 hover:border-red-500 hover:bg-red-600",
  "border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:border-emerald-500 hover:bg-emerald-600",
  "border-blue-500/40 bg-blue-500/10 text-blue-400 hover:border-blue-500 hover:bg-blue-600",
  "border-yellow-500/40 bg-yellow-500/10 text-yellow-400 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black",
  "border-purple-500/40 bg-purple-500/10 text-purple-400 hover:border-purple-500 hover:bg-purple-600",
  "border-pink-500/40 bg-pink-500/10 text-pink-400 hover:border-pink-500 hover:bg-pink-600",
];

export default function CategorySection() {
  return (
    <section className="bg-slate-950 px-4 py-8 sm:py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">

        <div className="mb-8 flex w-full max-w-6xl items-center justify-center gap-5">
          <div className="h-px flex-1 bg-red-600/60" />

          <div className="shrink-0 text-center">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
              Explore
            </p>

            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Browse Categories
            </h2>
          </div>

          <div className="h-px flex-1 bg-red-600/60" />
        </div>

        <div className="grid w-full max-w-7xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10">
          {categories.map((category, index) => {
            const style =
              categoryStyles[index % categoryStyles.length];

            return (
              <button
                key={category.name}
                type="button"
                className={`flex min-h-[64px] min-w-0 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-center text-sm font-semibold shadow-sm transition duration-200 hover:-translate-y-0.5 hover:text-white ${style}`}
              >
                <span className="shrink-0 text-lg leading-none">
                  {category.icon}
                </span>

                <span className="whitespace-normal leading-tight">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}