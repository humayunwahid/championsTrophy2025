import { ReactNode } from "react";
import "../styles/index.scss";
import "../../globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/assets/img/featureImage/Home.webp" />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RD4M0V2Q7P"></script>
        <script dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-RD4M0V2Q7P');
            `
        }} />
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
        <script dangerouslySetInnerHTML={{
            __html: `
                window.googletag = window.googletag || {cmd: []};
                googletag.cmd.push(function() {
                  googletag.defineSlot('/67551462/A-Sports-Home', [[970, 250], [750, 300], [950, 90], [728, 90],[320, 100], [320, 50]], 'div-gpt-ad-1740050113204-0').addService(googletag.pubads());
                  googletag.defineSlot('/67551462/A-Sports-RoS', [[320, 100], [970, 250], [320, 460], [930, 80], [460, 60], [960, 90], [468, 60], [970, 90], [729, 90], [930, 90], [468, 90]], 'div-gpt-ad-1740050160931-0').addService(googletag.pubads());
                  googletag.pubads().enableSingleRequest();
                  googletag.enableServices();
          });
            `
        }} />
      </head>

      {/* ✅ Google Analytics Script
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XND72FRVP6"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XND72FRVP6');
        `}
      </Script> */}

      {/* ✅ Google Ads (GPT.js) */}
      {/* <Script
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="lazyOnload"
      />
      <Script id="google-ads" strategy="lazyOnload">
        {`
          window.googletag = window.googletag || {cmd: []};
          googletag.cmd.push(function() {
            googletag.defineSlot('/67551462/A-Sports-Home', [[970, 250], [750, 300], [950, 90], [728, 90],[320, 100], [320, 50]], 'div-gpt-ad-1740050113204-0').addService(googletag.pubads());
            googletag.defineSlot('/67551462/A-Sports-RoS', [[320, 100], [970, 250], [320, 460], [930, 80], [460, 60], [960, 90], [468, 60], [970, 90], [729, 90], [930, 90], [468, 90]], 'div-gpt-ad-1740050160931-0').addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
          });
        `}
      </Script> */}

      <body>{children}</body>
    </html>
  );
}
