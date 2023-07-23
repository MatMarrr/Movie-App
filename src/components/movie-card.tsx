import Image from "next/image";
import { bluredPoster } from "@/base64Images/blured-poster";

interface MovieCardProps {
  poster: string;
  name: string;
}

export default function MovieCard({ poster, name }: MovieCardProps) {
  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/original${poster}`}
        alt={name}
        layout="intrinsic"
        width={300}
        height={500}
        placeholder="blur"
        blurDataURL={bluredPoster}
        className="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
      />
      <p>{name}</p>
    </div>
  );
}
