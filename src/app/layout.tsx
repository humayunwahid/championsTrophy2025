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



	  <script
            dangerouslySetInnerHTML={{
              __html: `
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
    googletag.defineSlot('/67551462/A-Sports-Home', [[970, 250], [750, 300], [950, 90], [728, 90],[320, 100], [320, 50]], 'div-gpt-ad-1740050113204-0').addService(googletag.pubads());
    googletag.defineSlot('/67551462/A-Sports-RoS', [[320, 100], [970, 250], [320, 460], [930, 80], [460, 60], [960, 90], [468, 60], [970, 90], [729, 90], [930, 90], [468, 90]], 'div-gpt-ad-1740050160931-0').addService(googletag.pubads());
	googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });

  `,
            }}
          />

      <body>{children}</body>
    </html>
  );
}
