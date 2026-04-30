"use client";

import { usePathname } from "next/navigation";
import MobileNavbar from "@/components/ui/MobileNavbar";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const isAdminPage = pathname === "/ruth-bags";

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      {children}
      {!isAdminPage && <MobileNavbar />}
    </main>
  );
}