import { ReactNode } from "react";
import "../styles/index.scss";
import "../../globals.css";
import Script from "next/script";
import ErrorBoundary from "../components/ErrorBoundary";
import ErrorBoundaryWrapper from './../components/ErrorBoundaryWrapper';


export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        
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
        <meta property="og:updated_time" content={new Date().toISOString()} />
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Champions Trophy 2025",
            "url": `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
            "description": "Keep abreast of all the action from the Champions Trophy 2025! Get match schedules, latest news, live scores, team details, and expert opinions.",
            "publisher": {
              "@type": "Organization",
              "name": "A-Sports TV",
              "url": `${process.env.NEXT_PUBLIC_API_BASE_URL}`
            }
          })
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

      <body>
        <ErrorBoundaryWrapper>{children}</ErrorBoundaryWrapper>
      </body>
    </html>
  );
}
