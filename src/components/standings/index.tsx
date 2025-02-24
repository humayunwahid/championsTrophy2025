
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
      <BreadcrumbEvent title="Points Table" subtitle="Points Table"/>
      <Leaderboard/>
      <Standings />
      <div className="container p-4">
      <p><b>Champions Trophy - Points Table:</b> Stay updated on the performance of all teams in the ICC Champions Trophy 2025 with our dedicated Points Table page. Monitor the latest standings, rankings, net run rates, wins, losses, and other key statistics as Pakistan (hosts), India, New Zealand, Australia, England, South Africa, Bangladesh, Afghanistan, and other competing nations vie for cricketing glory. Our comprehensive overview provides you with essential insights into the tournament’s progress, ensuring you’re always informed about the forerunners in the race for the championship.</p>
      </div>
			<MarqueeOne style_2={false} />
      <FooterTwo />
    </>
  );
};

export default Event;