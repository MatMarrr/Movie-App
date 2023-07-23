import Image from "next/image";
import { bluredPoster } from "@/base64Images/blured-poster";
import Link from "next/link";

interface MovieCardProps {
  poster: string;
  name: string;
  id: number;
}

export default function MovieCard({ poster, name, id }: MovieCardProps) {
  return (
    <Link href={`/movie/${id}`}>
      <div className="p-3 pt-4 rounded-lg bg-dark-primary transform hover:scale-105 transition-transform duration-300 cursor-pointer flex items-center flex-col max-w-xs">
        <Image
          src={`https://image.tmdb.org/t/p/original${poster}`}
          alt={name}
          layout="intrinsic"
          width={300}
          height={500}
          placeholder="blur"
          blurDataURL={bluredPoster}
          className="rounded-lg"
        />
        <p className="w-100 flex justify-center pt-3 font-medium">{name}</p>
      </div>
    </Link>
  );
}
