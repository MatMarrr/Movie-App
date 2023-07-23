import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "../components/navbar";
import "tailwindcss/tailwind.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Movie App",
  description: "Movie App created by MatMar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-dark-background text-dark-text`}
      >
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
