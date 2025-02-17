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
    <section className="event-list-section fix section-padding pt-0">
      <div className="container">
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
                      <h4>
                        <Link href="/event-details">{fixture.name}</Link>
                      </h4>
                      <ul className="post-time">
                        <li>
                          <i className="far fa-map-marker-alt"></i>
                          {fixture.venue}
                        </li>
                        <li>
                          <i className="far fa-clock"></i>
                          {new Date(fixture.date).toLocaleTimeString()}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="event-image">
                  <img src="assets/img/event/list/01.jpg" alt="event" />
                </div>
                <div className="event-btn">
                  <Link href="/event-details" className="theme-btn">
                    Book A Seat
                  </Link>
                </div>
              </div>
            ))}
          {/* ) : (
            <p>Loading fixtures...</p>
          )} */}
          <div className="event-button">
            <Link href="/event-details" className="theme-btn">
              View All Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixturesList;
