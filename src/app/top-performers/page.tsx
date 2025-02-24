import { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import React from "react";
import TopPerformers from "@/components/top-performers";

export const metadata: Metadata = {
  title: "Champions Trophy 2025 Top Performers",
  description:
    "Discover the top performers of ICC Champions Trophy 2025. Explore standout bowlers and batsmen along with their key stats and match highlights.",
  keywords:
    "Champions Trophy 2025 Top Performers, Top Bowlers Champions Trophy 2025, Top Batsmen Champions Trophy 2025, ICC Champions Trophy 2025 Stats, Champions Trophy 2025 Best Performers",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/top-performers`,
  },
  openGraph: {
    title: "Champions Trophy 2025 Top Performers",
    description:
      "Discover the top performers of ICC Champions Trophy 2025. Explore standout bowlers and batsmen along with their key stats and match highlights.",
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/top-performers`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/assets/img/featureImage/Top-Performers.webp`,
        width: 1200,
        height: 630,
        alt: "Champions Trophy 2025 Top Performers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@asportstvpk",
    title: "Champions Trophy 2025 Top Performers",
    description:
      "Discover the top performers of ICC Champions Trophy 2025. Explore standout bowlers and batsmen along with their key stats and match highlights.",
    images: [`${process.env.NEXT_PUBLIC_API_BASE_URL}/assets/img/featureImage/Top-Performers.webp`],
  }, 
};

const index = () => {
  return (
    <Wrapper>
      <TopPerformers />
    </Wrapper>
  );
};

export default index;
