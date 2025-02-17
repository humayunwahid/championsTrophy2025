
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import MarqueeOne from '@/common/MarqueeOne';
import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import Standings from './Standings';


const Event = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbEvent title="Event List" subtitle="Event List" />
      <Standings />
			<MarqueeOne style_2={true} />
      <FooterOne />
    </>
  );
};

export default Event;