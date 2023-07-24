"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // zapobiega przeładowaniu strony
    query !== "" && router.push(`/search/${query}`);
  };

  return (
    <div className="h-24 p-10 bg-dark-secondary flex justify-start items-center gap-10 max-w-full">
      <Link className="text-xl" href="/">
        Movie App
      </Link>
      <Link href="/search/pokemon">page 2</Link>
      <p>page 3</p>
      <p>page 4</p>
      <form className="flex gap-10 items-center" onSubmit={handleSubmit}>
        <input
          className="text-black h-5/6 rounded-lg px-2 py-1"
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for movie"
        />
        <button
          className={`${query === "" && "opacity-60"} px-4 py-2 text-white bg-blue-300 rounded-lg`}
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}