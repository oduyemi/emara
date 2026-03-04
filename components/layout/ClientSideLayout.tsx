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

  const isSupplierRoute = pathname.includes("/suppliers");

    return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      {isSupplierRoute ? <SupplierHeader /> : <Header />}
      {children}
      {!hideDefaultFooter && <Footer />}
    </div>
  );
}