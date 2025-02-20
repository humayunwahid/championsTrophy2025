import Head from "next/head";
import FixturesList from "@/components/fixtures";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Champions Trophy 2025 Fixtures",
  description: "Stay updated with the latest fixtures of the ICC Champions Trophy 2025. Get the complete schedule of all matches, including dates, times, venues, and teams. Follow the thrilling tournament as top cricketing nations compete for the title.",
  keywords: "Champions Trophy 2025 Fixtures, Champions Trophy 2025 Schedule, ICC Champions Trophy 2025 Match List, Champions Trophy 2025 Match Dates, Champions Trophy 2025 Venues, Champions Trophy 2025 Time Table"
};

const index = () => {
  return (
    <Wrapper>
      <Head>
        <title>Champions Trophy 2025 Fixturess</title>
        <meta name="description" content="Stay updated with the latest fixtures of the ICC Champions Trophy 2025. Get the complete schedule of all matches, including dates, times, venues, and teams." />
        <meta name="keywords" content="Champions Trophy 2025 Fixtures, Champions Trophy 2025 Schedule, ICC Champions Trophy 2025 Match List, Champions Trophy 2025 Match Dates, Champions Trophy 2025 Venues, Champions Trophy 2025 Time Table" />
        <link rel="canonical" href="https://ct25.a-sports.tv/fixtures" />
        <meta property="og:title" content="Champions Trophy 2025 Fixtures" />
        <meta property="og:description" content="Stay updated with the complete schedule of ICC Champions Trophy 2025. Get match dates, timings, venues, and more!" />
        <meta property="og:image" content="/assets/img/featureImage/Fixtures.webp" />
        <meta property="og:url" content="https://ct25.a-sports.tv/fixtures" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Champions Trophy 2025 Fixtures" />
        <meta name="twitter:description" content="Stay updated with the complete schedule of ICC Champions Trophy 2025. Get match dates, timings, venues, and more!" />
        <meta name="twitter:image" content="/assets/img/featureImage/Fixtures.webp" />
        <meta name="twitter:site" content="@asportstvpk" />
      </Head>
      <FixturesList />
    </Wrapper>
  );
};

export default index;
