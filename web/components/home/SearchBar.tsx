"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = search.trim();

    if (!query) {
      router.push("/movies");
      return;
    }

    router.push(`/movies?search=${encodeURIComponent(query)}`);
  }

  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-5xl justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-3 sm:flex-row"
        >
          <div className="flex h-16 flex-1 items-center rounded-full border border-red-500/40 bg-slate-900 px-6 shadow-[0_0_25px_rgba(239,68,68,0.08)] transition focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500/20">
            <span className="mr-3 text-xl text-slate-400">
              🔍
            </span>

            <input
              type="search"
              name="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search movies, series, anime..."
              className="w-full bg-transparent text-base text-white outline-none placeholder:text-slate-500 sm:text-lg"
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            className="h-16 rounded-full bg-red-600 px-9 text-base font-bold text-white shadow-lg transition hover:bg-red-700"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
