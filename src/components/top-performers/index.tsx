
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import MarqueeOne from '@/common/MarqueeOne';
import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import TeamDetail from './TeamDetail';
import FooterTwo from '@/layouts/footers/FooterTwo';
import { Metadata } from 'next';
import Head from 'next/head';
import TopPerformers from './TopPerformers';


const Event = ({ teamid, teamData }) => {
  // console.log(teamData + 78);

 
  
  return (
    <>



      <HeaderOne />
      <BreadcrumbEvent title="Top Performers" subtitle="Top Performers" />
      <TopPerformers />
      <div className="container p-4">
      <p><b>Champions Trophy</b> - Top Performers: Discover the standout talent on our Champions Trophy 2025 Top Performers page. Here, you'll explore the elite bowlers and batsmen who have set the tournament alight with their exceptional skills, complete with detailed stats and match highlights. Whether it's a game-changing delivery or a boundary-smashing inning, our comprehensive coverage ensures you stay updated on the best performers shaping the ICC Champions Trophy 2025.</p>
      </div>
			<MarqueeOne style_2={false} />
      <FooterTwo />
    </>
  );
};

export default Event;