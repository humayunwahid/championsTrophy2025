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
                                    <a href="/teams/pakistan">
                                        <img src="assets/img/team/pakistan.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">
                                    {/* <a href="/teams/pakistan"><h4>PAKISTAN</h4></a> */}
                                    <Link href="/teams/pakistan"></Link>

                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="/teams/india">
                                        <img src="assets/img/team/india.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">
                                    <Link href="/teams/india"></Link>

                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="/teams/new-zealand">
                                        <img src="assets/img/team/newzealand.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">

                                    <Link href="/teams/new-zealand"></Link>

                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="/teams/south-africa">
                                        <img src="assets/img/team/southafrica.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">
                                    <Link href="/teams/south-africa"></Link>

                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6  col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="/teams/afghanistan">
                                        <img src="assets/img/team/afghanistan.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">
                                    <Link href="/teams/afghanistan"></Link>


                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="/teams/australia">
                                        <img src="assets/img/team/austrailia.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">

                                    <Link href="/teams/australia"></Link>


                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="/teams/bangladesh">
                                        <img src="assets/img/team/bangladesh.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">
                                    <Link href="/teams/bangladesh"></Link>

                                    {/* <p>VIEW TEAM PROFILE</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6  col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                    <a href="/teams/england">
                                        <img src="assets/img/team/england.jpg" alt="img" />
                                    </a>
                                    {/* <div className="social-icon">
                               
                                
                            </div> */}
                                </div>
                                <div className="content">
                                    <Link href="/teams/england"></Link>

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