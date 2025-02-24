
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
      <div className="container p-4">
      <p><b>Champions Trophy - Results:</b> Stay on top of every moment with our dedicated Champions Trophy 2025 Results page. Here, you’ll find comprehensive updates on match outcomes, detailed scorecards, and the latest team performances. Whether you’re looking to review a recent game or track the tournament’s progress through real-time standings and points tables, our page provides all the essential insights. Follow the thrilling journey of each team as they battle for cricketing glory, and never miss a beat of the action.</p>
      </div>
			<MarqueeOne style_2={false} />
      <FooterTwo />
    </>
  );
};

export default Event;