"use client";
import React, { useState } from "react";

const teamFlags = {
  "Bangladesh": "https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/6.png?v=7",
  "India": "https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/6.png?v=7",
  "New Zealand": "https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/6.png?v=7",
  "Pakistan": "https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/6.png?v=7",
  "Afghanistan": "https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/6.png?v=7",
  "Australia": "https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/6.png?v=7",
  "England": "https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/6.png?v=7",
  "South Africa": "https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/6.png?v=7",
};

const Standings = () => {
  const [selectedGroup, setSelectedGroup] = useState("Group A");
  
  const groups = ["Group A", "Group B"];
  const standingsData = {
    "Group A": [
      { position: 1, team: "Bangladesh", played: 5, won: 4, tied: 0, lost: 1, points: 50, nrr: "+0.752" },
      { position: 2, team: "India", played: 5, won: 3, tied: 1, lost: 1, points: 45, nrr: "+0.512" },
      { position: 3, team: "New Zealand", played: 5, won: 3, tied: 0, lost: 2, points: 40, nrr: "-0.231" },
      { position: 4, team: "Pakistan", played: 5, won: 2, tied: 0, lost: 3, points: 35, nrr: "-0.500" },
    ],
    "Group B": [
      { position: 1, team: "Afghanistan", played: 6, won: 5, tied: 0, lost: 1, points: 55, nrr: "+0.812" },
      { position: 2, team: "Australia", played: 6, won: 4, tied: 1, lost: 1, points: 50, nrr: "+0.650" },
      { position: 3, team: "England", played: 6, won: 3, tied: 0, lost: 3, points: 45, nrr: "-0.120" },
      { position: 4, team: "South Africa", played: 6, won: 2, tied: 1, lost: 3, points: 40, nrr: "-0.250" },
    ],
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg max-w-full mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4 text-center">Standings</h2>
      <div className="mb-4 text-center">
        <label className="font-semibold">Select Group:</label>
        <select
          className="ml-2 p-2 border rounded"
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
        >
          {groups.map((group) => (
            <option key={group} value={group}>{group}</option>
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
            {standingsData[selectedGroup].map((team) => (
              <tr key={team.position} className="border-b hover:bg-gray-100">
                <td className="border p-2 font-semibold">{team.position}</td>
                <td className="border p-2 font-semibold text-uppercase">
                  <img src={teamFlags[team.team]} alt={team.team} className="inline-block w-6 h-6 mr-2 uppercase" /> {team.team}
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
