
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import MarqueeOne from '@/common/MarqueeOne';
import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import TeamDetail from './TeamDetail';
import FooterTwo from '@/layouts/footers/FooterTwo';


const Event = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbEvent title="Event List" subtitle="Event List" />
      <TeamDetail />
			<MarqueeOne style_2={true} />
      <FooterTwo />
    </>
  );
};

export default Event;