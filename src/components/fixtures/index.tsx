
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import MarqueeOne from '@/common/MarqueeOne';
import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import FixturesList from './FixturesList';
import FooterTwo from '@/layouts/footers/FooterTwo';
import Leaderboard from './../Ads/Leaderboard';


const Event = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbEvent title="Fixtures" subtitle="Fixtures" />
      <Leaderboard/>
      <FixturesList />
			<MarqueeOne style_2={false} />
      <FooterTwo />
    </>
  );
};

export default Event;