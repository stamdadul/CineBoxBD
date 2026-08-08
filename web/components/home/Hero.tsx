export default function Hero() {
  return (
    <section className="bg-slate-950 px-4 pt-10 pb-5 sm:pt-12 sm:pb-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

        <p className="text-sm font-medium tracking-wide text-slate-400 sm:text-base">
          Welcome to
        </p>

        <h1 className="mt-1 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          CineBoxBD
        </h1>

        <div className="mt-3 inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-semibold text-red-400 sm:text-sm">
          🎬 Bangladesh's Modern Movie Platform
        </div>

      </div>
    </section>
  );
}