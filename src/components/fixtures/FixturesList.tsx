"use client";
import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Fixture = {
  _id: string;
  name: string;
  date: string;
  teams: string[]; // Fixed type: Changed 'array' to 'string[]'
  venue: string;
  result: string;
};

const FixturesList = () => {
  const [fixtures, setFixtures] = useState<Fixture[]>([]);

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const res = await fetch("/api/fixtures", { cache: "no-store" }); // Ensures no cache
        if (!res.ok) {
          throw new Error("Failed to fetch fixtures");
        }
        const data = await res.json();
        setFixtures(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchFixtures();
  }, []);

  return (
    <section className="event-list-section fix  mx-auto section-padding pt-0 mt-5">
      <div className="container">
      <div className="section-title text-center">
                        <h6 className="wow fadeInUp">
                        Stay Updated: Match Schedule, Scores & Outcomes
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        FIXTURES & RESULTS
                        </h2>
                    </div>
        <div className="event-list-wrapper">
          {/* {fixtures.length > 0 ? ( */}
          
            {fixtures.map((fixture) => (
              <div className="event-list-items" key={fixture._id}>
                <div className="event-content">
                  <div className="content">
                    <div className="date">
                      <h2>{new Date(fixture.date).getDate()}</h2>
                      <span>
                        {new Date(fixture.date).toLocaleString("default", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="title-text">
                      <h5>
                        <Link href="/event-details">{fixture.name}</Link>
                      </h5>
                      <ul className="post-time">
                        <li>
                          <i className="far fa-map-marker-alt"></i>
                          {fixture.venue.split(", ")[0]} {/* First part (Stadium) */}
                        </li>
                        <li>
                          <i className="far fa-map-marker-alt"></i>
                          {fixture.venue.split(", ").slice(1).join(", ")} {/* Remaining part (City, Country) */}
                        </li>
                        <li>
                          <i className="far fa-clock"></i>
                          {fixture.time}
                        </li>
                      </ul>

                      
                    </div>
                  </div>
                </div>
                {/* Dynamic Flag Images */}
                <div className="event-image d-flex align-items-center gap-2 p-3 grey-background rounded">
                  {fixture.teams.map((team, index) => (
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


                {/* <div className="event-btn">
                  <Link href="/event-details" className="theme-btn">
                    Book A Seat
                  </Link>
                </div> */}
              </div>
            ))}
          {/* ) : (
            <p>Loading fixtures...</p>
          )} */}
          {/* <div className="event-button">
            <Link href="/event-details" className="theme-btn">
              View All Events
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FixturesList;
