import { Metadata } from "next";
import Head from "next/head";
import FixturesList from "@/components/fixtures";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata: Metadata = {
  title: "Champions Trophy 2025 Fixtures",
  description:
    "Stay updated with the latest fixtures of the ICC Champions Trophy 2025. Get the complete schedule of all matches, including dates, times, venues, and teams.",
  keywords:
    "Champions Trophy 2025 Fixtures, Champions Trophy 2025 Schedule, ICC Champions Trophy 2025 Match List, Champions Trophy 2025 Match Dates, Champions Trophy 2025 Venues, Champions Trophy 2025 Time Table",
  alternates: {
    canonical: "https://ct25.a-sports.tv/fixtures",
  },
  openGraph: {
    title: "Champions Trophy 2025 Fixtures",
    description:
      "Stay updated with the complete schedule of ICC Champions Trophy 2025. Get match dates, timings, venues, and more!",
    url: "/fixtures",
    type: "website",
    images: [
      {
        url: "/assets/img/featureImage/Fixtures.webp",
        width: 1200,
        height: 630,
        alt: "Champions Trophy 2025 Fixtures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@asportstvpk",
    title: "Champions Trophy 2025 Fixtures",
    description:
      "Stay updated with the complete schedule of ICC Champions Trophy 2025. Get match dates, timings, venues, and more!",
    images: ["/assets/img/featureImage/Fixtures.webp"],
  },
};

const index = () => {
  return (
    <Wrapper>
      <FixturesList />
    </Wrapper>
  );
};

export default index;
