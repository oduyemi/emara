"use client";
import { TopHeader } from "../navigation/TopHeader";
import Footer from "../navigation/Footer";
import { usePathname } from "next/navigation";
import { SupplierHeader } from "../navigation/suppliers/Header";
import { SupplierTopHeader } from "../navigation/suppliers/TopHeader";

const LOCALES = ["en", "fr", "ar"];

function stripLocale(pathname: string) {
  const segments = pathname.split("/");
  const firstSegment = segments[1];

  if (LOCALES.includes(firstSegment)) {
    return "/" + segments.slice(2).join("/");
  }

  return pathname;
}

export default function ClientSideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Normalize path (remove locale prefix)
  const normalizedPath = stripLocale(pathname);

  const isSupplierRoute = normalizedPath.includes("/suppliers");

  const hideAllLayout =
    normalizedPath === "/login" ||
    normalizedPath === "/suppliers/login" ||
    normalizedPath === "/suppliers/register" ||
    normalizedPath === "/buyers/login" ||
    normalizedPath === "/buyers/register" ||
    normalizedPath === "/suppliers/onboarding";

  const hideFooter =
    normalizedPath === "/" ;

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

      {/* Footer */}
      {!hideFooter && <Footer />}
    </div>
  );
}