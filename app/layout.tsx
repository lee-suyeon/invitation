import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./styles/globals.css";
import Script from "next/script";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "수연, 다운 결혼해요 🤍",
  description: "4월 20일 토요일 오후 1시 30, 인천 샤펠드미앙",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <Script
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
          strategy="beforeInteractive"
        />
      </head>
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
