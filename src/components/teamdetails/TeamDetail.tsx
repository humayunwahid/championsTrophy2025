"use client"; // This must be the very first line

import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";
import TeamList from "../team/TeamList";
import { useEffect, useState } from "react";
import BlogsHomeTwoCT2025 from "../homes/ct2025/BlogsHomeTwoCT2025";


const formatDate = (isoString) => {
  if (!isoString) return "Unknown"; // Handle missing or null values
  const date = new Date(isoString);
  
  if (isNaN(date.getTime())) return "Invalid Date"; // Handle invalid dates

  return new Intl.DateTimeFormat('en-US', {
    month: 'long', // Full month name
    day: '2-digit',
    year: 'numeric'
  }).format(date);
};


const getOrdinalSuffix = (num) => {
    if (typeof num !== "number" || isNaN(num)) return num; // Handle invalid input
  
    const suffixes = ["th", "st", "nd", "rd"];
    const v = num % 100;
    return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
  };
  
const TeamDetail = ({ teamData, teamid }) => {
    const [isClient, setIsClient] = useState(false);

    // console.log(JSON.stringify(teamData.players));
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
            <section className="team-details-section pt-0">
                <div className="container">
                    <div className="team-details-wrapper custom">
                        <div className="team-details-items">
                            <div className="details-image">
                                <img
                                    src={"/assets/img/team/" + teamData.countryflag || ""}
                                    alt={teamData.country}
                                />
                            </div>
                            <div className="team-details-content">
                                <h2>{teamData.country} Cricket Team</h2>
                                <span>
                                   Won {teamData.icctitles} ICC Titles
                                </span>
                                <ul className="details-list p-2">
                                    <li>{getOrdinalSuffix(teamData.iccpositions)} Position in ODI Rankings</li>
                                    <li>{teamData.iccmatches} Matches</li>
                                    <li>{teamData.iccpoints} Points</li>
                                    <li>{teamData.iccratings} Ratings</li>
                                </ul>
                                <p className="mt-3">Last Updated - {formatDate(teamData.icclastupd)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            <section className="team-section-5 fix section-padding pt-0">
                <div className="container">
                    <div className="section-title  text-center">
                        <h6 className="wow fadeInUp">
                            {teamData.country} Squad For
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Champions Trophy 2025
                        </h2>
                    </div>
                    <div className="row">
                        {teamData.players.map((player, key) =>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
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

            <BlogsHomeTwoCT2025 cat={teamData.country}/>

        </>
    );
};

export default TeamDetail;
