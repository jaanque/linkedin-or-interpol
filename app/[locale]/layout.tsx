import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import {NextIntlClientProvider, useMessages} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import "../globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LinkedIn or Interpol",
  description: "A deduction game.",
};

export default function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
