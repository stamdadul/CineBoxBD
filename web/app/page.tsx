import Hero from "@/components/home/Hero";
import SearchBar from "@/components/home/SearchBar";
import CategorySection from "@/components/home/CategorySection";
import TrendingSection from "@/components/home/TrendingSection";
import LatestMovies from "@/components/home/LatestMovies";
import CommunityBanner from "@/components/home/CommunityBanner";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-slate-950">
      <div className="home-page -space-y-8">

        {/* Hero */}
        <Hero />

        {/* Search */}
        <SearchBar />

        {/* Categories */}
        <CategorySection />

        {/* Trending Movies */}
        <TrendingSection />

        {/* Latest Movies */}
        <LatestMovies />

        {/* Community */}
        <CommunityBanner />

        {/* Small gap before Footer */}
        <div className="h-2 w-full" />

      </div>
    </main>
  );
}