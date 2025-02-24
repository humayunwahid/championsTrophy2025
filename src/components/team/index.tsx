
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import MarqueeOne from '@/common/MarqueeOne';
import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import TeamList from './TeamList';
import FooterTwo from '@/layouts/footers/FooterTwo';
import Leaderboard from './../Ads/Leaderboard';


const Event = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbEvent title="Participating Teams" subtitle="Teams" />
      <Leaderboard/>
      <TeamList />
      <div className="container p-4">
      <p><b>Champions Trophy - Teams:</b> Explore the lineup for Champions Trophy 2025 on our dedicated Teams page. This tournament brings together the best in cricket as Pakistan, India, New Zealand, Australia, England, South Africa, Bangladesh, and Afghanistan—esteemed champion teams—compete for glory. Hosted by Pakistan and the UAE, these top-tier teams are set to deliver thrilling performances, and our page provides comprehensive details on each team's squad, groupings, and key players. Stay informed as these cricket powerhouses face off in one of the most exciting tournaments of the year.</p>
      </div>
			<MarqueeOne style_2={false} />
      <FooterTwo />
    </>
  );
};

export default Event;