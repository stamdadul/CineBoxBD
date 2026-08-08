export default function CommunityBanner() {
  return (
    <section className="w-full px-8 py-8">
      <div className="mx-auto w-full max-w-4xl">
        <div className="rounded-xl border border-red-600 bg-slate-950 px-4 py-4 text-center shadow-lg">

          {/* Title */}
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            🚀 Join Our Community
          </h2>

          {/* Description */}
          <p className="mt-2 text-sm text-slate-300 sm:text-base">
            Stay updated with the latest movie updates, new releases and announcements.
          </p>

          {/* Community Buttons */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">

            <button
              type="button"
              className="rounded-lg bg-sky-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              ✈️ Telegram
            </button>

            <button
              type="button"
              className="rounded-lg bg-indigo-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              🎮 Discord
            </button>

            <button
              type="button"
              className="rounded-lg bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              🅵 Facebook
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}