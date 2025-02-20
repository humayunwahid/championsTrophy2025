import Head from "next/head";
import TeamList from "@/components/team";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Champions Trophy 2025 Teams",
  description: "Pakistan, India, New Zealand, Australia, England, South Africa, Bangladesh and Afghanistan are the teams participating in Champions Trophy 2025 hosted by Pakistan and UAE as the champion teams of cricket meet to compete.",
  keywords: "Champions Trophy 2025 Teams squad, Champions Trophy 2025 Teams list, Champions Trophy 2025 Teams group, Champions Trophy 2025 Teams name"
};

const index = () => {
  return (
    <Wrapper>
      <Head>
        <title>Champions Trophy 2025 Teams</title>
        <meta name="description" content="Pakistan, India, New Zealand, Australia, England, South Africa, Bangladesh and Afghanistan are the teams participating in Champions Trophy 2025 hosted by Pakistan and UAE as the champion teams of cricket meet to compete." />
        <meta name="keywords" content="Champions Trophy 2025 Teams squad, Champions Trophy 2025 Teams list, Champions Trophy 2025 Teams group, Champions Trophy 2025 Teams name" />
        <link rel="canonical" href="https://ct25.a-sports.tv/teams" />
        <meta property="og:title" content="Champions Trophy 2025 Teams" />
        <meta property="og:description" content="Get details about all the teams participating in Champions Trophy 2025, including Pakistan, India, New Zealand, Australia, England, South Africa, Bangladesh, and Afghanistan." />
        <meta property="og:image" content="/assets/img/featureImage/Teams.webp" />
        <meta property="og:url" content="https://ct25.a-sports.tv/teams" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Champions Trophy 2025 Teams" />
        <meta name="twitter:description" content="Find out which teams are competing in the ICC Champions Trophy 2025, hosted by Pakistan and UAE." />
        <meta name="twitter:image" content="/assets/img/featureImage/Teams.webp" />
        <meta name="twitter:site" content="@asportstvpk" />
      </Head>
      <TeamList />
    </Wrapper>
  );
};

export default index;