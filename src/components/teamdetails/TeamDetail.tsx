"use client"; // Ensures this component is client-side only
import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import TeamList from "../team/TeamList";

const TeamDetail = () => {
    const [isClient, setIsClient] = useState(false);

    // Ensures component is only modified on client side
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <p className="text-center text-gray-500">Loading team details...</p>;
    }

    return (
        <>
            <section className="team-details-section section-padding pt-0">
                <div className="container">
                    <div className="team-details-wrapper custom">
                        <div className="team-details-items">
                            <div className="details-image">
                                <img src="/assets/img/team/pakistan.jpg" alt="Team Detail" />
                            </div>
                            <div className="team-details-content">
                                <h2>PAKISTAN CRICKET TEAM</h2>
                                <span>3 ICC TITLES</span>
                                <ul className="details-list">
                                    <li>
                                        1st Position in ODI Rankings
                                        
                                    </li>
                                    <li>
                                      48 Matches
                                    </li>
                                    <li>
                                      5725 Points
                                    </li>
                                    <li>
                                      119 Ratings
                                    </li>
                                </ul>
                                {/* <h3>About Me</h3>
                                <p className="mt-4">
                                    UX/UI instructors play a crucial role in shaping the next generation of designers by offering expert guidance, practical insights, and personalized feedback...
                                </p> */}
                                {/* <div className="details-area">
                                    <Link href="/contact" className="theme-btn">Contact Me</Link>
                                    <h5>
                                        <Link href="/instructor-details">Follow Me</Link>
                                    </h5>
                                    <div className="social-icon d-flex align-items-center">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-dribbble"></i></a>
                                        <a href="#"><i className="fab fa-behance"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div> */}
                                <p className="mt-3">  Last Updated - 16 February 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section-5 fix section-padding pt-0">
                <div className="container">
                    <div className="section-title  text-center">
                        <h6 className="wow fadeInUp">
                            Pakistan Squad For
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Champions Trophy 2025
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                  
                                        <img src="/assets/img/team/team-players/pakistan/babar-azam.jpg" alt="img" />
                                    
                                   
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                  
                                        <img src="/assets/img/team/team-players/pakistan/babar-azam.jpg" alt="img" />
                                    
                                   
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                  
                                        <img src="/assets/img/team/team-players/pakistan/babar-azam.jpg" alt="img" />
                                    
                                   
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                  
                                        <img src="/assets/img/team/team-players/pakistan/babar-azam.jpg" alt="img" />
                                    
                                   
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                  
                                        <img src="/assets/img/team/team-players/pakistan/babar-azam.jpg" alt="img" />
                                    
                                   
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                  
                                        <img src="/assets/img/team/team-players/pakistan/babar-azam.jpg" alt="img" />
                                    
                                   
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                  
                                        <img src="/assets/img/team/team-players/pakistan/babar-azam.jpg" alt="img" />
                                    
                                   
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items style-2">
                                <div className="thumb">
                                  
                                        <img src="/assets/img/team/team-players/pakistan/babar-azam.jpg" alt="img" />
                                    
                                   
                                </div>
                               
                            </div>
                        </div>
                       

                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamDetail;
