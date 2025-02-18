import React from 'react';

const MarqueeOne = ({ style_2 }) => {
  const marqueeItems = [
    "🏆 Champions Trophy 2025 - The Ultimate Showdown!",
    "🌟 Biggest Cricket Event of the Year!",
    "🎉 Who Will Lift the Trophy? Stay Tuned!",
    "📅 Stay Updated with A Sports - Get Fixtures & Results!",
    "📊 Check the Latest Points Table & Team Rankings!"
  ];

  return (
    <div className="marquee-section style-header">
      <div className={`mycustom-marque ${style_2 ? "theme-green-bg-1" : "header-marque theme-blue-bg"}`}>
        <div className="scrolling-wrap flex">
          {[...Array(3)].map((_, index) => (
            <div className="comm flex items-center" key={index}>
              {marqueeItems.map((item, idx) => (
                <div key={idx} className={`cmn-textslide ${style_2 ? "text-color-2" : "text-white"}`}>
                 {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeOne;
