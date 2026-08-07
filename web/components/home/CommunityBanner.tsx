export default function CommunityBanner() {
  return (
    <section className="bg-slate-950 py-8">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <div className="text-center">

            <span className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white">
              🚀 Join Our Community
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white">
              Stay Updated Every Day
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-slate-400">
              Join our official community to receive the latest movie updates,
              download links, announcements and exclusive content.
            </p>

          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <button className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-600">
              Telegram
            </button>

            <button className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700">
              Discord
            </button>

            <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              Facebook
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}