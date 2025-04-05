import { Inter, Outfit } from "next/font/google";

import "./css/color.css";
import "./css/globals.css";
import "./css/typography.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";

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
  title: "Magnus Car App",
  description: "Just a dummy car app for practicing, by Mukadus Jawaid",
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
