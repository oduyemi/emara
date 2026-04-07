import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/config";
import { NextResponse } from "next/server";
import { verifyToken } from "./utils/auth";
const intlMiddleware = createMiddleware({
    locales,
    defaultLocale,
    localePrefix: "as-needed",
    localeDetection: false,
});
export default function middleware(req) {
    var _a;
    const { pathname } = req.nextUrl;
    const pathnameWithoutLocale = pathname.replace(new RegExp(`^/(${locales.join("|")})`), "");
    if (pathnameWithoutLocale.startsWith("/suppliers/onboarding")) {
        const token = (_a = req.cookies.get("token")) === null || _a === void 0 ? void 0 : _a.value;
        if (!token) {
            return NextResponse.redirect(new URL("/suppliers/login", req.url));
        }
        const decoded = verifyToken(token);
        if (!decoded || decoded.role !== "supplier") {
            return NextResponse.redirect(new URL("/suppliers/login", req.url));
        }
    }
    return intlMiddleware(req);
}
export const config = {
    matcher: [
        "/((?!api|_next|.*\\..*).*)",
    ],
};