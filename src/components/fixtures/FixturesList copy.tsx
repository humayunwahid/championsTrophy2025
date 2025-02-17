"use client"
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from "react";

type Fixture = {
    _id: string;
    name: string;
    date: string;
    teams: array;
    venue: string;
    result: string;
  };



const FixturesList = () => {
    const [fixtures, setFixtures] = useState<Fixture[]>([]);
  const selectHandler = (e: any) => { };

  // useEffect(() => {
  //   fetch("/api/Fixtures")
  //     .then((res) => res.json())
  //     .then((data) => setFixtures(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  return (
    <>
        <section className="event-list-section fix section-padding pt-0">
            <div className="container">
                <div className="event-list-wrapper">
                    {/* {fixtures.map((fixture) => ( */}
                        <div className="event-list-items">
                            <div className="event-content">
                                <div className="content">
                                    <div className="date">
                                        <h2>18</h2>
                                        <span>Sep 2024</span>
                                    </div>
                                    <div className="title-text">
                                        <h4><Link href="/event-details">Outdoor Games and Nature Exploration</Link></h4>
                                        <ul className="post-time">
                                            <li><i className="far fa-map-marker-alt"></i>Ronald D. Birt</li>
                                            <li><i className="far fa-map-marker-alt"></i> New York</li>
                                            <li><i className="far fa-clock"></i> 09:30am</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="event-image">
                                <img src="assets/img/event/list/01.jpg" alt="img" />
                            </div>
                            <div className="event-btn"> 
                                <Link href="/event-details" className="theme-btn">
                                    Book A Seat
                                </Link>
                            </div>
                        </div>
                    {/* ))} */}
                    <div className="event-button">
                        <Link href="/event-details" className="theme-btn">View All Events</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
  return (
    <div>
      <h1>Fixtures List</h1>
      <ul>
        {fixtures.map((fixture) => (
          <li key={fixture._id}>
            {fixture.name} - {fixture.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FixturesList;