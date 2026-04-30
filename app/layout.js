import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";
import LayoutWrapper from "@/components/LayoutWrapper";

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

/* ✅ NOW THIS WORKS */
export const metadata = {
  title: "Ruth Bags",
  description: "Luxury handcrafted bags",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-black">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}