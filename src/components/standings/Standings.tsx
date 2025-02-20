"use client";

import React, { useEffect, useState } from "react";

const teamFlags = {
  pakistan: "https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/6.png?v=7",
  india: "https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/6.png?v=7",
  "new zealand": "https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/6.png?v=7",
  bangladesh: "https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/6.png?v=7",
  australia: "https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/6.png?v=7",
  england: "https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/6.png?v=7",
  "south africa": "https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/6.png?v=7",
  afghanistan: "https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/6.png?v=7",
};

const Standings = () => {
  const [selectedGroup, setSelectedGroup] = useState("a");
  const [standingsData, setStandingsData] = useState({ a: [], b: [] });
  const groups = ["a", "b"];

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await fetch("/api/standings");
        const data = await response.json();
        
        const groupedData = data.reduce(
          (acc, team) => {
            acc[team.group].push({
              position: acc[team.group].length + 1,
              team: team.team,
              played: team.played,
              won: team.won,
              lost: team.lost,
              tied: team.tied,
              points: team.points,
              nrr: team["net rr"],
            });
            return acc;
          },
          { a: [], b: [] }
        );

        setStandingsData(groupedData);
      } catch (error) {
        console.error("Error fetching standings data:", error);
      }
    };

    fetchStandings();
  }, []);

  return (
    <div className="p-4 rounded-lg max-w-full mx-auto text-center container section-padding p-4">
      <div className="section-title text-center">
                        <h6 className="wow fadeInUp">
                        Track Team Performance: Points, Matches, Wins & NRR
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        STANDINGS
                        </h2>
                    </div>
      <div className="mb-4 text-center">
        <label className="font-semibold">Select Group:</label>
        <select
          className="ml-2 p-2 border rounded"
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
        >
          {groups.map((group) => (
            <option key={group} value={group}>{`Group ${group.toUpperCase()}`}</option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-left justify-between point-table">
          <thead>
            <tr className="bg-gray-200 text-gray-700 font-semibold">
              <th className="border p-2">Pos</th>
              <th className="border p-2">Team</th>
              <th className="border p-2">Played</th>
              <th className="border p-2">Win</th>
              <th className="border p-2">Lose</th>
              <th className="border p-2">Tied</th>
              <th className="border p-2">Points</th>
              <th className="border p-2">NRR</th>
            </tr>
          </thead>
          <tbody>
            {standingsData[selectedGroup].map((team, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="border p-2 font-semibold">{team.position}</td>
                <td className="border p-2 font-semibold text-uppercase">
                  <img src={`/assets/img/flags/${team.team.toLowerCase().replace(/\s+/g, "")}.png`} alt={team.team} className="inline-block w-6 h-6 mr-2 uppercase" /> {team.team}
                </td>
                <td className="border p-2">{team.played}</td>
                <td className="border p-2">{team.won}</td>
                <td className="border p-2">{team.lost}</td>
                <td className="border p-2">{team.tied}</td>
                <td className="border p-2 font-bold">{team.points}</td>
                <td className="border p-2">{team.nrr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Standings;
