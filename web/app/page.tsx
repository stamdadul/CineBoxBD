import Hero from "@/components/home/Hero";
import SearchBar from "@/components/home/SearchBar";
import CategorySection from "@/components/home/CategorySection";
import TrendingSection from "@/components/home/TrendingSection";
import LatestMovies from "@/components/home/LatestMovies";
import CommunityBanner from "@/components/home/CommunityBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />

      <SearchBar />

      <CategorySection />

      <TrendingSection />

      <LatestMovies />

      <CommunityBanner />

      <div className="h-2 w-full" />
    </main>
  );
}