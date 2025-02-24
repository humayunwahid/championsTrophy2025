
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import MarqueeOne from '@/common/MarqueeOne';
import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import TeamDetail from './TeamDetail';
import FooterTwo from '@/layouts/footers/FooterTwo';
import { Metadata } from 'next';
import Head from 'next/head';
import Leaderboard from './../Ads/Leaderboard';


const Event = ({ teamid, teamData }) => {
  // console.log(teamData + 78);

 
  
  return (
    <>



      <HeaderOne />
      <BreadcrumbEvent title={decodeURIComponent(teamid) + " Cricket Team"} subtitle={decodeURIComponent(teamid) + " Team Details"} />
      <Leaderboard/>
      <TeamDetail teamData={teamData} />
      <div className="container p-4">
      <p><b>Champions Trophy - </b> Explore all the essential information about {decodeURIComponent(teamid)} in the ICC Champions Trophy 2025 on our dedicated Team Details page. Stay informed with up-to-date squad details, including player profiles and their contributions to the team's success. We also provide the latest news and updates on {decodeURIComponent(teamid)}'s performance throughout the tournament, along with their current ICC rankings in ODI and other important sports stats. Whether you're following their journey to the championship or analyzing their stats, this page offers comprehensive insights to keep you connected to one of the most exciting teams of the tournament.</p>
      </div>
			<MarqueeOne style_2={false} />
      <FooterTwo />
    </>
  );
};

export default Event;