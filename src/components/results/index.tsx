
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import MarqueeOne from '@/common/MarqueeOne';
import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import ResultList from './ResultList';
import FooterTwo from '@/layouts/footers/FooterTwo';
import Leaderboard from './../Ads/Leaderboard';


const Event = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbEvent title="Results" subtitle="Results" />
      <Leaderboard/>
      <ResultList />
			<MarqueeOne style_2={false} />
      <FooterTwo />
    </>
  );
};

export default Event;