import { TMDBMovie } from "@/models/tmdb-movie";
import Image from "next/image";
import "tailwindcss/tailwind.css";
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
    <div className="flex flex-row flex-wrap">
      {movies.map((movie, index) => (
        <div key={index}>
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.overview}
            layout="intrinsic"
            width={300}
            height={500}
            className="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <p>{movie.original_title}</p>
        </div>
      ))}
    </div>
  );
}
