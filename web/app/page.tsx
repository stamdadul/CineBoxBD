import Hero from "@/components/home/Hero";
import CategorySection from "@/components/home/CategorySection";
import CommunityBanner from "@/components/home/CommunityBanner";
import MovieGrid from "@/components/home/MovieGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <CommunityBanner />
      <MovieGrid />
    </>
  );
}