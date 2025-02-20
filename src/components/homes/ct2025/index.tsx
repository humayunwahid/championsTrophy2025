import Head from "next/head";
import MarqueeOne from "@/common/MarqueeOne";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import React from "react";
import HeroHomeTwo from "./HeroHomeTwo";
import TopCategoryHomeTwo from "./TopCategoryHomeTwo";
import PopularCoursesHomeTwo from "./PopularCoursesHomeTwo";
import EventHomeTwo from "./EventHomeTwo";
import ChooseHomeTwo from "./ChooseHomeTwo";
import TeamHomeTwo from "./TeamHomeTwo";
import CertificateHomeTwo from "./CertificateHomeTwo";
import CoursesHomeTwo from "./CoursesHomeTwo";
import TestimonialHomeTwo from "./TestimonialHomeTwo";
import FaqHomeTwo from "./FaqHomeTwo";
import BlogHomeTwo from "./BlogHomeTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterThree from "@/layouts/footers/FooterThree";
import FooterFour from "@/layouts/footers/FooterFour";
import FooterFive from "@/layouts/footers/FooterFive";
import FooterOne from "@/layouts/footers/FooterOne";
import BlogHomeThree from "../home-3/BlogHomeThree";
import BlogHomeCT2025 from "./BlogHomeCT2025";
import TeamList from "@/components/team/TeamList";
import FixturesList from "@/components/fixtures/FixturesList";
import Standings from "@/components/standings/Standings";
import PakistanTeamSquad from "@/components/teamdetails/PakistanTeamSquad";
import BlogHomeOne from "../home/BlogHomeOne";
import BlogsHomeTwoCT2025 from "./BlogsHomeTwoCT2025";
import TeamDetail from "@/components/teamdetails/TeamDetail";

const CT2025 = async () => {
  const res = await fetch(`https://ct25.a-sports.tv/api/squads/Pakistan.php`, { cache: "no-store" });
  const teamData = await res.json();

  return (
    <>
      
      <HeaderOne />
      <BlogHomeCT2025 />
      <TeamList />
      <Standings />
      <FixturesList />
      <PakistanTeamSquad teamData={teamData} teamid="Pakistan" />
      <BlogsHomeTwoCT2025 cat="champions-trophy-2025" />
			<MarqueeOne style_2={false} />
      <FooterTwo />
    </>
  );
};

export default CT2025;