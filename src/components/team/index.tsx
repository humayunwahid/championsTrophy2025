
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import MarqueeOne from '@/common/MarqueeOne';
import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import TeamList from './TeamList';
import FooterTwo from '@/layouts/footers/FooterTwo';


const Event = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbEvent title="Participating Teams" subtitle="Teams" />
      <TeamList />
			<MarqueeOne style_2={false} />
      <FooterTwo />
    </>
  );
};

export default Event;