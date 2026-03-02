"use client";
import { TopHeader } from "../navigation/TopHeader";
import { Header } from "../navigation/Header";
import Footer from "../navigation/Footer";
import { usePathname } from "next/navigation";
import { SupplierHeader } from "../navigation/suppliers/Header";

export default function ClientSideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Exclude footer on landing page and /buyers routes
  const hideDefaultFooter =
    pathname === "/" ||
    pathname === "/en" ||
    pathname === "/fr" ||
    pathname === "/ar" ||
    pathname.startsWith("/buyers");

  // Determine which header to show
  const renderHeader = pathname.startsWith("/suppliers") ? (
    <SupplierHeader />
  ) : (
    <Header />
  );

  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      {renderHeader}
      {children}
      {!hideDefaultFooter && <Footer />}
    </div>
  );
}