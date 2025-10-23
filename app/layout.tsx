import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Prata, Lato } from "next/font/google";

const latoFont = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: "400",
});

const prataFont = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: "400",
});
export const metadata = {
  title: "XSpace - Interior Design Platform",
  description: "From Vision to Reality, Curated Designs For You",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${latoFont.variable} ${prataFont.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
