import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, defaultLocale } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale || defaultLocale;

  if (!locales.includes(locale)) {
    notFound();
  }

  try {
    const messages = (await import(`../messages/${locale}.json`)).default;
    return { locale, messages };
  } catch (err) {
    console.error(`Missing messages for locale "${locale}"`, err);
    notFound();
  }
});