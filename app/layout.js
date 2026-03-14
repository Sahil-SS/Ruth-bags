import ScrollToTop from "@/components/ui/ScrollToTop";
import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";
import WhatsAppFloatingIcon from "@/components/ui/WhatsAppFloatingIcon";
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
        {/* Main wrapper with bottom padding only on mobile to account for the navbar */}
        <main className="min-h-screen pb-20 md:pb-0">
          {children}
        </main>

        {/* Floating WhatsApp - Hidden on mobile via its internal classes */}
        <WhatsAppFloatingIcon />
        
        {/* Scroll To Top button */}
        <ScrollToTop />
        
        {/* Mobile Bottom Bar - Visible only on mobile */}
        <MobileNavbar />
      </body>
    </html>
  );
}