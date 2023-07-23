import { TMDBMovie } from "@/models/tmdb-movie";
import MovieCard from "./movie-card";

interface MoviesGridProps {
  movies: TMDBMovie[];
}

export default function MoviesGrid({ movies }: MoviesGridProps) {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          poster={movie.poster_path}
          name={movie.original_title}
        />
      ))}
    </div>
  );
}
