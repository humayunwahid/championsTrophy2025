
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
			<MarqueeOne style_2={false} />
      <FooterTwo />
    </>
  );
};

export default Event;