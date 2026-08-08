import MovieActions from "@/components/movie/MovieActions";
import MovieHero from "@/components/movie/MovieHero";
import MovieInfo from "@/components/movie/MovieInfo";
import ScreenshotGallery from "@/components/movie/ScreenshotGallery";
import SimilarMovies from "@/components/movie/SimilarMovies";

const movie = {
  title: "The Last Horizon",
  year: "2026",
  genre: "Action • Thriller • Sci-Fi",
  runtime: "2h 18m",
  rating: "8.9",
  quality: "HD",
  language: "English",
  description:
    "A former soldier is forced back into action when a mysterious threat puts the future of humanity at risk. His journey takes him across a dangerous world where survival depends on choices he never expected to make.",
};

export default function MovieDetailsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <MovieHero
        title={movie.title}
        year={movie.year}
        genre={movie.genre}
        runtime={movie.runtime}
        rating={movie.rating}
        quality={movie.quality}
        language={movie.language}
        description={movie.description}
      />

      <div className="mx-auto max-w-7xl px-4 pt-7 sm:px-6 lg:px-8">
        <MovieActions />
      </div>

      <MovieInfo
        year={movie.year}
        genre={movie.genre}
        runtime={movie.runtime}
        language={movie.language}
        rating={movie.rating}
      />

      <ScreenshotGallery />

      <SimilarMovies />

    </main>
  );
}