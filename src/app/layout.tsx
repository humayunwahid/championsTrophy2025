import { ReactNode } from "react";
import "../styles/index.scss";
import "../../globals.css";
import Head from "next/head";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap"
        />
      </Head>

      {/* Google Analytics Script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XND72FRVP6"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XND72FRVP6');
        `}
      </Script>

      <body>{children}</body>
    </html>
  );
}
