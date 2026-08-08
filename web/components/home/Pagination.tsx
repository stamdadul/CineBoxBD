const pages = [1, 2, 3, 4, 5];

export default function Pagination() {
  return (
    <div className="flex items-center justify-center gap-2">

      <button
        type="button"
        className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-400 transition hover:border-red-500 hover:bg-red-600 hover:text-white"
      >
        Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={`h-10 min-w-10 rounded-lg border px-3 text-sm font-semibold transition ${
            page === 1
              ? "border-red-600 bg-red-600 text-white"
              : "border-slate-700 text-slate-400 hover:border-red-500 hover:bg-red-600 hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-400 transition hover:border-red-500 hover:bg-red-600 hover:text-white"
      >
        Next
      </button>

    </div>
  );
}