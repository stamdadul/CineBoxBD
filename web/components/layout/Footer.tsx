export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-900">
      <div className="container mx-auto px-4 py-10">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>
            <h2 className="text-2xl font-bold text-red-600">
              CineBoxBD
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Premium Movie & Entertainment Platform
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
            <a href="#">Home</a>
            <a href="#">Movies</a>
            <a href="#">Genres</a>
            <a href="#">DMCA</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </nav>

        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © 2026 CineBoxBD. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}