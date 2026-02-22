import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, defaultLocale } from "./config";

type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = (await requestLocale) ?? defaultLocale;

  if (!locales.includes(requested as Locale)) {
    notFound();
  }

  const locale = requested as Locale;

  const messages =
    (await import(`../messages/${locale}.json`)).default;

  return { locale, messages };
});