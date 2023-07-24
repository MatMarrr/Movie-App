import { TMDBMovie } from "@/models/tmdb-movie";
import "tailwindcss/tailwind.css";
import MoviesGrid from "../components/movies-grid";
import PageHeader from "@/components/page-header";
interface TrendingMoviesResponse {
  results: TMDBMovie[];
}

export default async function Page() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_API_KEY}`
  );
  const data: TrendingMoviesResponse = await response.json();
  const movies: TMDBMovie[] = data.results;

  return (
    <div>
      <PageHeader title="Trending Movies"/>
      <MoviesGrid movies={movies} />
    </div>
  );
}
