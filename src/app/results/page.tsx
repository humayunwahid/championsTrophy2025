import Head from "next/head";
import ResultList from "@/components/results";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Champions Trophy 2025 Results",
  description: "Get the latest results of the ICC Champions Trophy 2025. Stay updated with match outcomes, scores, team performances, and standings.",
  keywords: "Champions Trophy 2025 Results, ICC Champions Trophy 2025 Scores, Champions Trophy 2025 Match Results, ICC Champions Trophy 2025 Scorecard, Champions Trophy 2025 Team Standings, Champions Trophy 2025 Points Table"
};


const index = () => {
  return (
    <Wrapper>
      <Head>
        <title>Champions Trophy 2025 Results</title>
        <meta name="description" content="Get the latest results of the ICC Champions Trophy 2025. Stay updated with match outcomes, scores, team performances, and standings." />
        <meta name="keywords" content="Champions Trophy 2025 Results, ICC Champions Trophy 2025 Scores, Champions Trophy 2025 Match Results, ICC Champions Trophy 2025 Scorecard, Champions Trophy 2025 Team Standings, Champions Trophy 2025 Points Table" />
        <link rel="canonical" href="/results" />
        <meta property="og:title" content="Champions Trophy 2025 Results" />
        <meta property="og:description" content="Stay updated with the latest results of ICC Champions Trophy 2025. Check match scores, team performances, and standings!" />
        <meta property="og:image" content="/assets/img/featureImage/Results.webp" />
        <meta property="og:url" content="/results" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Champions Trophy 2025 Results" />
        <meta name="twitter:description" content="Stay updated with the latest results of ICC Champions Trophy 2025. Check match scores, team performances, and standings!" />
        <meta name="twitter:image" content="/assets/img/featureImage/Results.webp" />
        <meta name="twitter:site" content="@asportstvpk" />
      </Head>
      <ResultList />
    </Wrapper>
  );
};

export default index;