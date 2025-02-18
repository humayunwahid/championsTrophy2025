"use client"; // Ensures this component is client-side only
import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import TeamList from "../team/TeamList";

const PakistanTeamSquad = () => {
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

export default PakistanTeamSquad;
