import { ReactNode } from "react";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning className={lato.variable}>
      <body>{children}</body>
    </html>
  );
}
