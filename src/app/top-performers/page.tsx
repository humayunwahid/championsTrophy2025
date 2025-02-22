
import Head from "next/head";
import HomeThree from '@/components/homes/home-3';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

import { Metadata } from 'next';
import TopPerformers from "@/components/top-performers";

export const metadata: Metadata = {
  title: "Champions Trophy 2025 Top Performers",
  description: "Discover the top performers of ICC Champions Trophy 2025. Explore standout bowlers and batsmen along with their key stats and match highlights.",
  keywords: "Champions Trophy 2025 Top Performers, Top Bowlers Champions Trophy 2025, Top Batsmen Champions Trophy 2025, ICC Champions Trophy 2025 Stats, Champions Trophy 2025 Best Performers"
};


const index = () => {
  return (
    <Wrapper>
      <Head>
  <title>Champions Trophy 2025 Top Performers</title>
  <meta name="description" content="Discover the top performers of ICC Champions Trophy 2025. Explore standout bowlers and batsmen along with their key stats and match highlights." />
  <meta name="keywords" content="Champions Trophy 2025 Top Performers, Top Bowlers Champions Trophy 2025, Top Batsmen Champions Trophy 2025, ICC Champions Trophy 2025 Stats, Champions Trophy 2025 Best Performers" />
  <link rel="canonical" href="/top-performers" />
  <meta property="og:title" content="Champions Trophy 2025 Top Performers" />
  <meta property="og:description" content="Discover the top performers of ICC Champions Trophy 2025. Explore standout bowlers and batsmen along with their key stats and match highlights." />
  <meta property="og:image" content="/assets/img/featureImage/TopPerformers.webp" />
  <meta property="og:url" content="/top-performers" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Champions Trophy 2025 Top Performers" />
  <meta name="twitter:description" content="Discover the top performers of ICC Champions Trophy 2025. Explore standout bowlers and batsmen along with their key stats and match highlights." />
  <meta name="twitter:image" content="/assets/img/featureImage/TopPerformers.webp" />
  <meta name="twitter:site" content="@asportstvpk" />
</Head>
      <TopPerformers />
    </Wrapper>
  );
};

export default index;