import { Metadata } from "next";
import Standings from "@/components/standings";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata: Metadata = {
  title: "Champions Trophy 2025 Points Table",
  description:
    "Stay updated on the performance of all teams in the ICC Champions Trophy 2025 with our updated Points Table page. Monitor points of all competing nations as they vie for cricketing glory.",
  keywords:
    "Champions Trophy 2025, Champions Trophy 2025 Points Table Pakistan, Champions Trophy 2025 Schedule Points Table, Champions Trophy 2025 Schedule Points Table pdf, ICC Champions Trophy 2025 rankings, Champions Trophy 2025 net run rate, Champions Trophy 2025 team points table, Champions Trophy 2025 match results",
  alternates: {
    canonical: "https://ct25.a-sports.tv/points-table",
  },
  openGraph: {
    title: "Champions Trophy 2025 Points Table",
    description:
      "Check out the latest ICC Champions Trophy 2025 Points Table. Track team points, net run rate, and match results as teams compete for the championship.",
    url: "/points-table",
    type: "website",
    images: [
      {
        url: "/assets/img/featureImage/Standings.webp",
        width: 1200,
        height: 630,
        alt: "Champions Trophy 2025 Points Table",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@asportstvpk",
    title: "Champions Trophy 2025 Points Table",
    description:
      "Track the latest standings, rankings, and net run rates in the ICC Champions Trophy 2025.",
    images: ["/assets/img/featureImage/Standings.webp"],
  },
};

const index = () => {
  return (
    <Wrapper>
      <Standings />
    </Wrapper>
  );
};

export default index;
