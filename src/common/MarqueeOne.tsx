
import React from 'react';

const MarqueeOne = ({style_2} : any) => {
  return (
    <> 
       <div className="marquee-section style-header">
            <div className={`mycustom-marque  ${style_2 ? "theme-green-bg-1" : "header-marque theme-blue-bg"}`}>
                <div className="scrolling-wrap">
                    <div className="comm">
                        <div></div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Champions Trophy 2025</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Pakistan vs India</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Today 9:00 PM</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> A Sports</div>

                    </div>
                    <div className="comm">
                    <div></div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Champions Trophy 2025</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Pakistan vs India</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Today 9:00 PM</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> A Sports</div>

                    </div>
                    <div className="comm">
                    <div></div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Champions Trophy 2025</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Pakistan vs India</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Today 9:00 PM</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> A Sports</div>

                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default MarqueeOne;