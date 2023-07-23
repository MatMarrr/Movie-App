import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "../components/navbar";
import "tailwindcss/tailwind.css";
import { useRecoilValue } from "recoil";
import IsLightTheme from "../recoilState/IsLightTheme";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Movie App",
  description: "Movie App created by MatMar",
};

const isLightTheme = useRecoilValue(IsLightTheme);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
        ${poppins.className} 
        ${
          isLightTheme
            ? "bg-light-background text-light-text"
            : "bg-dark-background text-dark-text"
        }
      `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
