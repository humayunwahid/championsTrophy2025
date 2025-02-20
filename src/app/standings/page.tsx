import Head from "next/head";
import Standings from "@/components/standings";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Champions Trophy 2025 Points Table",
  description: "Stay updated on the performance of all teams in the ICC Champions Trophy 2025 with our updated Points Table page. Monitor points of Pakistan (Hosts), India, New Zealand, Australia, England, South Africa, Bangladesh, Afghanistan, and all other competing nations as they vie for cricketing glory. Keep track of rankings, net run rates, wins, losses, and other key stats. Gain a comprehensive overview of the tournament and stay informed about the forerunners in the race for the championship.",
  keywords: "Champions Trophy 2025, Champions Trophy 2025 Points Table Pakistan, Champions Trophy 2025 Schedule Points Table, Champions Trophy 2025 Schedule Points Table pdf, ICC Champions Trophy 2025 rankings, Champions Trophy 2025 net run rate, Champions Trophy 2025 team standings, Champions Trophy 2025 match results"
};

const index = () => {
  return (
    <Wrapper>
      <Head>
        <title>Champions Trophy 2025 Points Table</title>
        <meta name="description" content="Stay updated on the performance of all teams in the ICC Champions Trophy 2025 with our updated Points Table page. Monitor points of all competing nations as they vie for cricketing glory." />
        <meta name="keywords" content="Champions Trophy 2025, Champions Trophy 2025 Points Table Pakistan, Champions Trophy 2025 Schedule Points Table, Champions Trophy 2025 Schedule Points Table pdf, ICC Champions Trophy 2025 rankings, Champions Trophy 2025 net run rate, Champions Trophy 2025 team standings, Champions Trophy 2025 match results" />
        <meta property="og:title" content="Champions Trophy 2025 Points Table" />
        <meta property="og:description" content="Check out the latest ICC Champions Trophy 2025 Points Table. Track team standings, net run rate, and match results as teams compete for the championship." />
        <meta property="og:image" content="/assets/img/featureImage/Standings.webp" />
        <meta property="og:url" content="/standings" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Champions Trophy 2025 Points Table" />
        <meta name="twitter:description" content="Track the latest standings, rankings, and net run rates in the ICC Champions Trophy 2025." />
        <meta name="twitter:image" content="/assets/img/featureImage/Standings.webp" />
        <meta name="twitter:site" content="@asportstvpk" />
      </Head>
      <Standings />
    </Wrapper>
  );
};

export default index;