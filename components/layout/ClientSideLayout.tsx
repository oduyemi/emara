"use client";
import { TopHeader } from "../navigation/TopHeader";
import { Header } from "../navigation/Header";
import Footer from "../navigation/Footer";
import { usePathname } from "next/navigation";

export default function ClientSideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Exclude footer on landing page and /buyers routes
  const hideDefaultFooter =
    pathname === "/" || pathname.startsWith("/buyers");

  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <Header />
      {children}
      {!hideDefaultFooter && <Footer />}
    </div>
  );
}