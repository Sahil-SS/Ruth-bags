import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";
import MobileNavbar from "@/components/ui/MobileNavbar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "RUTH - Bags & Accessories",
  description: "Elegant and timeless bags for modern women.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-black">
        <main className="min-h-screen pb-20 md:pb-0">
        {children}
        <MobileNavbar />
        </main>
      </body>
    </html>
  );
}
