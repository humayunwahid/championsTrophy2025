"use client"
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React from 'react';

const TeamList = () => {
    const selectHandler = (e: any) => { };

    return (
        <>
        
            <section className="team-section-5 fix section-padding p-4">
                <div className="container">
                    <div className="section-title  text-center">
                        <h6 className="wow fadeInUp">
                            Teams Participating in
                        </h6>
                        {/* <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            CHAMPIONS TROPHY 2025
                        </h2> */}
                        <h1 className="wow fadeInUp text-2xl md:text-3xl lg:text-4xl font-bold custom-h1" data-wow-delay=".3s">
                            CHAMPIONS TROPHY 2025
                        </h1>

                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="/teams/Pakistan">
                                        <img src="assets/img/team/pakistan.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">
                                    {/* <a href="/teams/pakistan"><h4>PAKISTAN</h4></a> */}
                                    <Link href="/teams/Pakistan"></Link>

                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="/teams/India">
                                        <img src="assets/img/team/india.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">
                                    <Link href="/teams/India"></Link>

                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="/teams/New Zealand">
                                        <img src="assets/img/team/newzealand.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">

                                    <Link href="/teams/New Zealand"></Link>

                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="/teams/South Africa">
                                        <img src="assets/img/team/southafrica.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">
                                    <Link href="/teams/South Africa"></Link>

                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6  col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="/teams/Afghanistan">
                                        <img src="assets/img/team/afghanistan.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">
                                    <Link href="/teams/Afghanistan"></Link>


                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="/teams/Australia">
                                        <img src="assets/img/team/austrailia.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">

                                    <Link href="/teams/Australia"></Link>


                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="/teams/Bangladesh">
                                        <img src="assets/img/team/bangladesh.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">
                                    <Link href="/teams/Bangladesh"></Link>

                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6  col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="/teams/England">
                                        <img src="assets/img/team/england.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">
                                    <Link href="/teams/England"></Link>

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