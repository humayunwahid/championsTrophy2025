import { Metadata } from "next";
import ResultList from "@/components/results";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata: Metadata = {
  title: "Champions Trophy 2025 Results",
  description:
    "Get the latest results of the ICC Champions Trophy 2025. Stay updated with match outcomes, scores, team performances, and standings.",
  keywords:
    "Champions Trophy 2025 Results, ICC Champions Trophy 2025 Scores, Champions Trophy 2025 Match Results, ICC Champions Trophy 2025 Scorecard, Champions Trophy 2025 Team Standings, Champions Trophy 2025 Points Table",
  alternates: {
    canonical: "https://ct25.a-sports.tv/results",
  },
  openGraph: {
    title: "Champions Trophy 2025 Results",
    description:
      "Stay updated with the latest results of ICC Champions Trophy 2025. Check match scores, team performances, and standings!",
    url: "/results",
    type: "website",
    images: [
      {
        url: "/assets/img/featureImage/Results.webp",
        width: 1200,
        height: 630,
        alt: "Champions Trophy 2025 Results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@asportstvpk",
    title: "Champions Trophy 2025 Results",
    description:
      "Stay updated with the latest results of ICC Champions Trophy 2025. Check match scores, team performances, and standings!",
    images: ["/assets/img/featureImage/Results.webp"],
  },
};

const index = () => {
  return (
    <Wrapper>
      <ResultList />
    </Wrapper>
  );
};

export default index;
