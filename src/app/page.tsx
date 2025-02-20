import Head from "next/head";
import CT2025 from "@/components/homes/ct2025";
import HomeOne from "@/components/homes/home";
import HomeTwo from "@/components/homes/home-2";
import HomeThree from "@/components/homes/home-3";
import HomeFour from "@/components/homes/home-4";
import HomeFive from "@/components/homes/home-5";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Champions Trophy 2025 Matches, News, Results and Teams",
	description: "Keep abreast of all the action from the Champions Trophy 2025! Get match schedules, latest news, live scores, team details, and expert opinions.",
	keywords: "Champions Trophy 2025, Champions Trophy 2025 Points Table Pakistan, Champions Trophy 2025 Schedule, Champions Trophy 2025 Schedule Points Table pdf, ICC Champions Trophy 2025 rankings, Champions Trophy 2025 net run rate, Champions Trophy 2025 team standings, Champions Trophy 2025 match results",
};

const index = () => {
  return (
    <Wrapper>
      <Head>
        <meta property="og:title" content="Champions Trophy 2025 Matches, News, Results and Teams" />
        <meta property="og:description" content="Keep abreast of all the action from the Champions Trophy 2025! Get match schedules, latest news, live scores, team details, and expert opinions." />
        <meta property="og:image" content="/images/champions-trophy-2025.jpg" />
        <meta property="og:url" content="/champions-trophy-2025" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Champions Trophy 2025 Matches, News, Results and Teams" />
        <meta name="twitter:description" content="Get all the latest updates, schedules, results, and team details for Champions Trophy 2025. Stay informed with live scores and expert insights." />
        <meta name="twitter:image" content="/images/champions-trophy-2025.jpg" />
        <meta name="twitter:site" content="@asportstvpk" />
      </Head>
      <CT2025 />
    </Wrapper>
  );
};

export default index;