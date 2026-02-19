import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "../../i18n/request";
import ClientSideLayout from "@/components/layout/ClientSideLayout";

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { children } = props;
  const { locale } = await props.params;

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
