import Image from "next/image";
import { bluredPoster } from "@/base64Images/blured-poster";
import styles from "./MoviePage.module.css";
interface PageProps {
  params: { movieId: string };
}

interface MovieDetailsResponse {
  backdrop_path: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export default async function Page({ params: { movieId } }: PageProps) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`
  );
  const movieDetails: MovieDetailsResponse = await response.json();

  return (
    <div className="w-full h-full flex items-center">
      <div className="relative w-1/2 h-full">
        <Image
          src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
          alt={movieDetails.overview}
          layout="intrinsic"
          width={1000}
          height={600}
          placeholder="blur"
          blurDataURL={bluredPoster}
          className={`${styles.movieImage} rounded-lg`}
        />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-start p-8">
        <p className="text-5xl mb-5">{movieDetails.title}</p>
        <p className="mb-3">{movieDetails.overview}</p>
        <p>{movieDetails.vote_average.toFixed(1)}/10</p>
      </div>
    </div>
  );
}
