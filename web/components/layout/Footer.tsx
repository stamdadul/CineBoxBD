const footerLinks = {
  Explore: [
    "Movies",
    "Series",
    "Genres",
    "Latest",
  ],
  Community: [
    "Telegram",
    "Discord",
    "Facebook",
  ],
  Support: [
    "Contact",
    "Privacy",
    "Terms",
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-8">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <a
              href="/"
              className="text-xl font-extrabold text-white"
            >
              Cine<span className="text-red-500">Box</span>BD
            </a>

            <p className="mt-2 max-w-sm text-sm leading-5 text-slate-400">
              Discover movies, series and entertainment from one modern
              platform.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white">
                {title}
              </h3>

              <ul className="mt-2 space-y-1.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 transition hover:text-red-500"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom */}
        <div className="mt-6 flex flex-col gap-2 border-t border-slate-800 pt-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} CineBoxBD. All rights reserved.
          </p>

          <p>
            Built with Next.js
          </p>

        </div>

      </div>
    </footer>
  );
}