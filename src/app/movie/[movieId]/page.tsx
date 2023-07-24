import Image from "next/image";
import { bluredPoster } from "@/base64Images/blured-poster";
import styles from "./MoviePage.module.css";
import Link from "next/link";

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
    <div className={styles.moviePageContainer}>
      <div className={styles.movieContainer}>
        <Image
          src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
          alt={movieDetails.overview}
          layout="intrinsic"
          width={1000}
          height={600}
          placeholder="blur"
          blurDataURL={bluredPoster}
          className={styles.movieImage}
        />
        <div className={styles.movieDetailsContainer}>
          <p className={styles.movieTitle}>{movieDetails.title}</p>
          <p className={styles.movieDetailText}>{movieDetails.overview}</p>
          <p className={styles.movieRating}>
          Average ratings: {movieDetails.vote_average.toFixed(1)}/10
          </p>
        </div>
      </div>
      <Link className={styles.goBackButton} href="/">
        Back
      </Link>
    </div>
  );
}
