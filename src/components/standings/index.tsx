
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import MarqueeOne from '@/common/MarqueeOne';
import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import Standings from './Standings';
import FooterTwo from '@/layouts/footers/FooterTwo';
import Leaderboard from './../Ads/Leaderboard';


const Event = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbEvent title="Standings" subtitle="Standings" />
      <Leaderboard/>
      <Standings />
			<MarqueeOne style_2={false} />
      <FooterTwo />
    </>
  );
};

export default Event;