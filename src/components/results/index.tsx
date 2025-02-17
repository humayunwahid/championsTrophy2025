
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import MarqueeOne from '@/common/MarqueeOne';
import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import ResultList from './ResultList';


const Event = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbEvent title="Results" subtitle="Results" />
      <ResultList />
			<MarqueeOne style_2={true} />
      <FooterOne />
    </>
  );
};

export default Event;