export default function MovieActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        className="rounded-lg bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
      >
        ▶ Watch Now
      </button>

      <button
        type="button"
        className="rounded-lg border border-red-600 px-6 py-3 text-sm font-bold text-red-400 transition hover:bg-red-600 hover:text-white"
      >
        ↓ Download
      </button>
    </div>
  );
}