import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "../../i18n/request";
import ClientSideLayout from "@/components/layout/ClientSideLayout";
import type { Metadata } from "next";

type Props = {
  children: ReactNode;
  params: { locale: string };
};


const siteUrl = "https://emara.com";

const seoContent = {
  en: {
    title:
      "Emara | A verified B2B marketplace for African exporters",
    description:
      "Emara connects verified African exporters with global buyers through transparency and trust.",
  },
  fr: {
    title:
      "Emara | Marketplace B2B vérifiée pour exportateurs africains",
    description:
      "Emara connecte des exportateurs africains vérifiés avec des acheteurs internationaux grâce à la transparence.",
  },
  ar: {
    title:
      "إمارا | سوق B2B موثوق للمصدرين الأفارقة",
    description:
      "إمارا تربط المصدرين الأفارقة المعتمدين بالمشترين العالميين من خلال الشفافية والثقة.",
  },
};

export async function generateMetadata(
  { params }: { params: { locale: string } }
): Promise<Metadata> {
  const { locale } = params;

  if (!locales.includes(locale as any)) return {};

  const content = seoContent[locale as keyof typeof seoContent];

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        en: `${siteUrl}/en`,
        fr: `${siteUrl}/fr`,
        ar: `${siteUrl}/ar`,
        "x-default": `${siteUrl}/en`,
      },
    },
  };
}



export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = params;

  if (!locales.includes(locale as any)) notFound();

  const messages = await getMessages();
  const isRTL = locale === "ar";

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={isRTL ? "rtl" : "ltr"}>
        <ClientSideLayout>{children}</ClientSideLayout>
      </div>
    </NextIntlClientProvider>
  );
}