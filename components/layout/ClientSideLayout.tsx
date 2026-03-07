"use client";
import { TopHeader } from "../navigation/TopHeader";
import Footer from "../navigation/Footer";
import { usePathname } from "next/navigation";
import { SupplierHeader } from "../navigation/suppliers/Header";
import { SupplierTopHeader } from "../navigation/suppliers/TopHeader";



export default function ClientSideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isSupplierRoute = pathname.startsWith("/suppliers");

  const hideAllLayout =
    pathname === "/login" ||
    pathname === "/suppliers/login" ||
    pathname === "/suppliers/register" ||
    pathname === "/buyers/login" ||
    pathname === "/buyers/register" ||
    pathname === "/suppliers/onboarding";

  if (hideAllLayout) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Headers */}
      {isSupplierRoute ? <SupplierTopHeader /> : <TopHeader />}

      {/* Supplier navigation */}
      {isSupplierRoute && <SupplierHeader />}

      {children}

      <Footer />
    </div>
  );
}