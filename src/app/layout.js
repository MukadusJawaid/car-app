import { Inter, Outfit } from "next/font/google";

import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/color.css";
import "./css/globals.css";
import "./css/typography.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Caropedia Web",
  description: "Just a mock car app for practicing, by Mukadus Jawaid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <SideBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
