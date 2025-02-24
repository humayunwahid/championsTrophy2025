import { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import CT2025 from "@/components/homes/ct2025";
import React from "react";

export const metadata: Metadata = {
  title: "Champions Trophy 2025 Matches, News, Results and Teams",
  description:
    "Keep abreast of all the action from the Champions Trophy 2025! Get match schedules, latest news, live scores, team details, and expert opinions.",
  keywords:
    "Champions Trophy, Champions Trophy 2025, Champions Trophy 2025 Points Table Pakistan, Champions Trophy 2025 Schedule, Champions Trophy 2025 Schedule Points Table pdf, ICC Champions Trophy 2025 rankings, Champions Trophy 2025 net run rate, Champions Trophy 2025 team standings, Champions Trophy 2025 match results",
  alternates: {
    canonical: "/champions-trophy-2025",
  },
  openGraph: {
    title: "Champions Trophy 2025 Matches, News, Results and Teams",
    description:
      "Keep abreast of all the action from the Champions Trophy 2025! Get match schedules, latest news, live scores, team details, and expert opinions.",
    url: "/champions-trophy-2025",
    type: "website",
    images: [
      {
        url: "/images/champions-trophy-2025.jpg",
        width: 1200,
        height: 630,
        alt: "Champions Trophy 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@asportstvpk",
    title: "Champions Trophy 2025 Matches, News, Results and Teams",
    description:
      "Get all the latest updates, schedules, results, and team details for Champions Trophy 2025. Stay informed with live scores and expert insights.",
    images: ["/images/champions-trophy-2025.jpg"],
  },
};

const index = () => {
  return (
    <Wrapper>
      <CT2025 />
    </Wrapper>
  );
};

export default index;
