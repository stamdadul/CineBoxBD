export default function AnnouncementBar() {
  return (
    <section className="border-y border-red-500/20 bg-red-600">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-3">

        <span className="shrink-0 rounded-md bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          Update
        </span>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-white">
            নতুন মুভি, সিরিজ এবং সর্বশেষ আপডেট পেতে আমাদের সাথে যুক্ত থাকুন।
          </p>
        </div>

        <button className="hidden shrink-0 rounded-md bg-white px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-slate-100 sm:block">
          View Updates
        </button>

      </div>
    </section>
  );
}