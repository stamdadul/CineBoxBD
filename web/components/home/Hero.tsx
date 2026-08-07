export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">

        {/* Badge */}
        <div className="mb-6 inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm text-red-400">
          🎬 Bangladesh's Modern Movie Platform
        </div>

        {/* Title */}
        <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Welcome to
          <span className="block text-red-600">
            CineBoxBD
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Discover Movies, Web Series, Anime, K-Drama and More.
          Search instantly, explore categories and download your
          favourite entertainment from one place.
        </p>

        {/* Search */}
        <div className="mx-auto mt-10 flex max-w-3xl overflow-hidden rounded-xl border border-slate-700 bg-slate-900">

          <input
            type="text"
            placeholder="Search Movies, Series..."
            className="flex-1 bg-transparent px-5 py-4 text-white outline-none"
          />

          <button className="bg-red-600 px-8 font-semibold transition hover:bg-red-700">
            Search
          </button>

        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <button className="rounded-lg bg-red-600 px-8 py-3 font-semibold transition hover:bg-red-700">
            Browse Movies
          </button>

          <button className="rounded-lg border border-slate-700 bg-slate-800 px-8 py-3 font-semibold transition hover:bg-slate-700">
            Join Community
          </button>

        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-5 md:grid-cols-4">

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-3xl font-bold text-red-500">10K+</h2>
            <p className="mt-2 text-slate-400">Movies</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-3xl font-bold text-red-500">3K+</h2>
            <p className="mt-2 text-slate-400">Series</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-3xl font-bold text-red-500">24/7</h2>
            <p className="mt-2 text-slate-400">Updates</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-3xl font-bold text-red-500">100%</h2>
            <p className="mt-2 text-slate-400">Free Access</p>
          </div>

        </div>

      </div>
    </section>
  );
}