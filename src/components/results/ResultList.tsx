"use client"
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React, { useEffect, useState } from "react";

type Result = {
    _id: string;
    name: string;
    date: string;
    teams: string[]; // Fixed type: Changed 'array' to 'string[]'
    venue: string;
    result: string;
  };

const ResultList = () => {
    
  const [resultList, setResultList] = useState<Fixture[]>([]);
  const selectHandler = (e: any) => { };

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch("/api/fixtures", { cache: "no-store" }); // Ensures no cache
        if (!res.ok) {
          throw new Error("Failed to fetch results");
        }
        const data = await res.json();
        setResultList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchResults();
  }, []);

  return (
    <>
        <section className="event-list-section fix section-padding pt-0">
            <div className="container">
                <div className="event-list-wrapper">
                {resultList.map((result) => (
                result.result != "n/a" && (
                        <div className="event-list-items" key={result.name}>
                            <div className="event-content">
                                <div className="content">
                                    <div className="date">
                                        <h2>{new Date(result.date).getDate()}</h2>
                                        <span>
                                            {new Date(result.date).toLocaleString("default", {
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </span>
                                    </div>
                                    <div className="title-text">
                                        <h5><Link href="#">{result.name}</Link></h5>
                                        <ul className="post-time">
                                            <li>
                                                <i className="far fa-map-marker-alt"></i>
                                                {result.venue.split(", ")[0]} {/* First part (Stadium) */}
                                            </li>
                                            <li>
                                                <i className="far fa-map-marker-alt"></i>
                                                {result.venue.split(", ").slice(1).join(", ")} {/* Remaining part (City, Country) */}
                                            </li>
                                            <li>
                                                <i className="far fa-clock"></i>
                                                {result.time}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Dynamic Flag Images */}
                            <div className="event-image d-flex align-items-center gap-2 grey-background rounded">
                                {result.teams.map((team, index) => (
                                    <React.Fragment key={index}>
                                        <div>
                                            <img
                                                src={`/assets/img/flags/${team.toLowerCase().replace(/\s+/g, "")}.png`}
                                                alt={`${team} Flag`}
                                                className="img-fluid"
                                            />
                                        </div>
                                        {index === 0 && ( // Only add "vs" after the first image
                                            <div>
                                                <p className="fw-bold fs-4 m-0">vs</p>
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                            <div className="event-btn"> 
                                <b className="result-btn text-white rounded p-2">{result.result}</b>
                            </div>
                        </div>
                    )
                ))}

                    {/* <div className="event-button">
                        <Link href="/event-details" className="theme-btn">View All Events</Link>
                    </div> */}
                </div>
            </div>
        </section>
    </>
  );
};

export default ResultList;
