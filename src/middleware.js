import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["es", "en", "pt"],

  // Used when no locale matches
  defaultLocale: "es",
  localePrefix,
  locales,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(es|en|pt)/:path*"],
};
