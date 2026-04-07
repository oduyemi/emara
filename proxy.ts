import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/config";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/auth";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
  localeDetection: false,
});

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const pathnameWithoutLocale = pathname.replace(
    new RegExp(`^/(${locales.join("|")})`),
    ""
  );

  if (pathnameWithoutLocale.startsWith("/suppliers/onboarding")) {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.redirect(
        new URL("/suppliers/login", req.url)
      );
    }

    const decoded = verifyToken(token);

    if (!decoded || decoded.role !== "supplier") {
      return NextResponse.redirect(
        new URL("/suppliers/login", req.url)
      );
    }
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: [
    "/((?!api|_next|.*\\..*).*)",
  ],
};