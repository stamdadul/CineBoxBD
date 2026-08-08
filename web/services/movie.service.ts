const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export type MovieGenre = {
  id: string;
  name: string;
  slug: string;
};

export type MovieCategory = {
  id: string;
  name: string;
  slug: string;
};

export type Movie = {
  id: string;
  title: string;
  slug: string;
  description?: string | null;
  posterUrl?: string | null;
  thumbnailUrl?: string | null;
  trailerUrl?: string | null;
  videoUrl?: string | null;
  releaseDate?: string | null;
  runtime?: number | null;
  language?: string | null;
  rating?: number | null;
  createdAt?: string;
  updatedAt?: string;
  category?: MovieCategory | null;
  genres?: MovieGenre[];
};

export type MoviePagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type MoviesResponse = {
  success: boolean;
  count: number;
  pagination: MoviePagination;
  data: Movie[];
};

export type MovieResponse = {
  success: boolean;
  data: Movie;
};

export type GetMoviesOptions = {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  genre?: string;
  sort?: "latest" | "oldest" | "rating" | "title";
};

export async function getMovies(
  options: GetMoviesOptions = {}
): Promise<MoviesResponse> {
  const params = new URLSearchParams();

  if (options.page !== undefined) {
    params.set("page", String(options.page));
  }

  if (options.limit !== undefined) {
    params.set("limit", String(options.limit));
  }

  if (options.search) {
    params.set("search", options.search);
  }

  if (options.category) {
    params.set("category", options.category);
  }

  if (options.genre) {
    params.set("genre", options.genre);
  }

  if (options.sort) {
    params.set("sort", options.sort);
  }

  const queryString = params.toString();

  const url = queryString
    ? `${API_BASE_URL}/api/movies?${queryString}`
    : `${API_BASE_URL}/api/movies`;

  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  const result: MoviesResponse = await response.json();

  if (!result.success) {
    throw new Error("Failed to fetch movies");
  }

  return result;
}

export async function getMovieBySlug(
  slug: string
): Promise<Movie> {
  const response = await fetch(
    `${API_BASE_URL}/api/movies/${encodeURIComponent(slug)}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie");
  }

  const result: MovieResponse = await response.json();

  if (!result.success) {
    throw new Error("Failed to fetch movie");
  }

  return result.data;
}
