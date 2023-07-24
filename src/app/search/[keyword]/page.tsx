import MoviesGrid from "@/components/movies-grid";
import PageHeader from "@/components/page-header";
import { TMDBMovie } from "@/models/tmdb-movie";

interface PageProps {
  params: { keyword: string };
}

interface KeywordMoviesResponse {
  results: TMDBMovie[];
}

export default async function Page({ params: { keyword } }: PageProps) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${process.env.TMDB_API_KEY}`
  );
  const data: KeywordMoviesResponse = await response.json();
  const movies: TMDBMovie[] = data.results;
  return (
    <div>
      <PageHeader title={`Results for ${keyword}`} />
      <MoviesGrid movies={movies} />
    </div>
  );
}
