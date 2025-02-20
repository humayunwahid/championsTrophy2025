"use client"; // This must be the very first line

import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";
import TeamList from "../team/TeamList";
import { useEffect, useState } from "react";

const PakistanTeamSquad = ({ teamData, teamid }) => {
    const [isClient, setIsClient] = useState(false);
    // console.log(JSON.stringify(teamData));
    // This effect ensures that any client-side only logic is run in the browser.
    useEffect(() => {
        setIsClient(true);
    }, []);

    // If no team data is available, display a loading message.
    if (!teamData) {
        return <p className="text-center text-gray-500">Loading team details...</p>;
    }

    return (
        <>
            <section className="team-section-5 fix section-padding p-4">
                <div className="container">
                    <div className="section-title  text-center">
                        <h6 className="wow fadeInUp">
                            {teamData.country} Squad For
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            CHAMPIONS TROPHY 2025
                        </h2>
                    </div>
                    <div className="row">
                        {teamData.players.map((player, key) =>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="team-card-items style-2">
                                    <div className="thumb">

                                        <img src={`/assets/img/team/team-players/${teamData.country}/${player.imagepath}`} alt={player.name} />


                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PakistanTeamSquad;
