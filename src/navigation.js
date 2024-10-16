import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["es", "en", "pt"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
