
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import MarqueeOne from '@/common/MarqueeOne';
import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import TeamDetail from './TeamDetail';
import FooterTwo from '@/layouts/footers/FooterTwo';
import { Metadata } from 'next';
import Head from 'next/head';


const Event = ({ teamid, teamData }) => {
  // console.log(teamData + 78);

 
  
  return (
    <>



      <HeaderOne />
      <BreadcrumbEvent title={decodeURIComponent(teamid) + " Cricket Team"} subtitle={decodeURIComponent(teamid) + " Team Details"} />
      <TeamDetail teamData={teamData} />
			<MarqueeOne style_2={false} />
      <FooterTwo />
    </>
  );
};

export default Event;