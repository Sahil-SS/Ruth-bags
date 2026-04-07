"use client";
import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { usePathname } from "next/navigation"; // Import this
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

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Check if the current path is the admin portal
  const isAdminPage = pathname === "/ruth-bags";

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-black">
        <main className="min-h-screen pb-20 md:pb-0">
          {children}
          
          {/* Only render MobileNavbar if we are NOT on the admin page */}
          {!isAdminPage && <MobileNavbar />}
        </main>
      </body>
    </html>
  );
}