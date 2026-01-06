import { type NextRequest, NextResponse } from "next/server";

const locales = ["th", "en"];
const defaultLocale = "th";

/**
 * Handles localization redirects and path-based locale detection.
 * Next.js 16 uses proxy.ts for network boundary logic.
 */
export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Exclude internal Next.js paths and static assets
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.startsWith("/static") ||
        pathname.includes(".") // Catch files like favicon.ico, images, etc.
    ) {
        return;
    }

    // Check if pathname has a locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Redirect if no locale
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}
