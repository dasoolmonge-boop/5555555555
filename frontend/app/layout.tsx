import type { Metadata } from "next";
import "./globals.css";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Отель Чалама | Официальный сайт",
  description: "Загородный юрточный отель и гостиница в Кызыле. Уют, природа и премиальный сервис.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
