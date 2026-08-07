import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-red-600"
        >
          CineBoxBD
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="transition hover:text-red-500">
            Home
          </Link>

          <Link href="/movies" className="transition hover:text-red-500">
            Movies
          </Link>

          <Link href="/genres" className="transition hover:text-red-500">
            Genres
          </Link>

          <Link href="/search" className="transition hover:text-red-500">
            Search
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button className="hidden rounded-lg bg-red-600 px-5 py-2 text-sm font-semibold transition hover:bg-red-700 md:block">
            Login
          </button>

          <button className="text-3xl md:hidden">
            ☰
          </button>
        </div>

      </div>
    </header>
  );
}