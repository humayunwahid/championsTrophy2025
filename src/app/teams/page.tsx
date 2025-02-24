import { Metadata } from "next";
import TeamList from "@/components/team";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata: Metadata = {
  title: "Champions Trophy 2025 Teams",
  description:
    "Pakistan, India, New Zealand, Australia, England, South Africa, Bangladesh, and Afghanistan are the teams participating in Champions Trophy 2025, hosted by Pakistan and UAE. The champion teams of cricket meet to compete.",
  keywords:
    "Champions Trophy 2025 Teams squad, Champions Trophy 2025 Teams list, Champions Trophy 2025 Teams group, Champions Trophy 2025 Teams name",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/teams`,
  },
  openGraph: {
    title: "Champions Trophy 2025 Teams",
    description:
      "Get details about all the teams participating in Champions Trophy 2025, including Pakistan, India, New Zealand, Australia, England, South Africa, Bangladesh, and Afghanistan.",
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/teams`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/assets/img/featureImage/Teams.webp`,
        width: 1200,
        height: 630,
        alt: "Champions Trophy 2025 Teams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@asportstvpk",
    title: "Champions Trophy 2025 Teams",
    description:
      "Find out which teams are competing in the ICC Champions Trophy 2025, hosted by Pakistan and UAE.",
    images: [`${process.env.NEXT_PUBLIC_API_BASE_URL}/assets/img/featureImage/Teams.webp`],
  },
};

const index = () => {
  return (
    <Wrapper>
      <TeamList />
    </Wrapper>
  );
};

export default index;
