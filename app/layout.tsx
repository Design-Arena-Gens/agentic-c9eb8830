import type { Metadata } from "next";
import "./globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "دليل كتابة البرومبت الذكي",
  description:
    "أفضل الممارسات المتقدمة لكتابة البرومبت لدى الشركات الرائدة في الذكاء الاصطناعي للحصول على نتائج دقيقة.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
