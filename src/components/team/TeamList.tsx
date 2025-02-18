"use client"
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React from 'react';

const TeamList = () => {
    const selectHandler = (e: any) => { };

    return (
        <>
            <section className="team-section-5 fix section-padding pt-0">
                <div className="container">
                    <div className="section-title  text-center">
                        <h6 className="wow fadeInUp">
                            Teams Participating in
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            CHAMPIONS TROPHY 2025
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="#">
                                        <img src="assets/img/team/pakistan.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">
                                    {/* <a href="/teamdetails/pakistan"><h4>PAKISTAN</h4></a> */}
                                    <Link href="/teamdetails/Pakistan"><h4>PAKISTAN</h4></Link>

                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="#">
                                        <img src="assets/img/team/india.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">
                                    <Link href="/teamdetails/India"><h4>INDIA</h4></Link>

                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="#">
                                        <img src="assets/img/team/newzealand.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">

                                    <Link href="/teamdetails/New Zealand"><h4>NEW ZEALAND</h4></Link>

                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="#">
                                        <img src="assets/img/team/southafrica.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">
                                    <Link href="/teamdetails/South Africa"><h4>SOUTH AFRICA</h4></Link>

                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6  col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="#">
                                        <img src="assets/img/team/afghanistan.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">
                                    <Link href="/teamdetails/Afhganistan"><h4>AFGHANISTAN</h4></Link>


                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="#">
                                        <img src="assets/img/team/austrailia.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">

                                    <Link href="/teamdetails/Australia"><h4>AUSTRAILIA</h4></Link>


                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="#">
                                        <img src="assets/img/team/bangladesh.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">
                                    <Link href="/teamdetails/Bangladesh"><h4>BANGLADESH</h4></Link>

                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6  col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="#">
                                        <img src="assets/img/team/england.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">
                                    <Link href="/teamdetails/England"><h4>ENGLAND</h4></Link>

                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamList;