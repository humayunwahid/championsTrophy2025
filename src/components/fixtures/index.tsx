
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
      <div className="container p-4">
      <p><b>Champions Trophy - Fixtures:</b> Stay updated with the latest fixtures for the ICC Champions Trophy 2025 on our dedicated Fixtures page. Our comprehensive match schedule provides all the essential details—including dates, times, venues, and participating teams—ensuring you never miss a moment of the action. As top cricketing nations compete for the title, follow every match and stay informed about the exciting clashes that define this thrilling tournament.</p>
      </div>
			<MarqueeOne style_2={false} />
      <FooterTwo />
    </>
  );
};

export default Event;