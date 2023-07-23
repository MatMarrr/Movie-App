import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-24 p-10 mb-10 bg-dark-secondary flex justify-start items-center gap-10">
      <Link className="text-xl" href="/">Movie App</Link>
      <p>page 2</p>
      <p>page 3</p>
      <p>page 4</p>
    </div>
  );
}
