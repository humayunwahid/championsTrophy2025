
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import MarqueeOne from '@/common/MarqueeOne';
import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import FixturesList from './fixturesList';


const Event = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbEvent title="Fixtures & Results" subtitle="Fixtures & Results" />
      <FixturesList />
			<MarqueeOne style_2={true} />
      <FooterOne />
    </>
  );
};

export default Event;