"use client";
import React, { useEffect, useState } from "react";

const TopPerformers = () => {
  const [batters, setBatters] = useState<Fixture[]>([]);
  const [bowlers, setBowlers] = useState<Fixture[]>([]);

  useEffect(() => {
    const fetchBatters = async () => {
      try {
        const res = await fetch("/api/top-batters", { cache: "no-store" }); // Ensures no cache
        if (!res.ok) {
          throw new Error("Failed to fetch batters");
        }
        const data = await res.json();
        setBatters(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchBowlers = async () => {
      try {
        const res = await fetch("/api/top-bowlers", { cache: "no-store" }); // Ensures no cache
        if (!res.ok) {
          throw new Error("Failed to fetch bowlers");
        }
        const data = await res.json();
        setBowlers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBatters();
    fetchBowlers();
  }, []);

  return (
    <>
      <div className="p-4 rounded-lg max-w-full mx-auto text-center container section-padding p-4">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">MOST RUNS</h6>
          {/* <h2 className="wow fadeInUp" data-wow-delay=".3s">
            MOST RUNS
          </h2> */}
        </div>
        {/* <div className="mb-4 text-center">
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
      </div> */}
        <div className="overflow-x-auto">
          <table className="w-full  text-left justify-between point-table top-performer">
            <thead>
              <tr className="bg-gray-200 text-gray-700 font-semibold">
                <th className="prl-4">Pos</th>
                <th className="prl-4">Team</th>
                <th className="prl-4">Player</th>
                <th className="prl-4">Matches</th>
                <th className="prl-4">Runs</th>
                {/* <th className="prl-4"></th> */}
              </tr>
            </thead>
            <tbody>
              {/* {standingsData[selectedGroup].map((team, index) => ( */}
              {/* <tr key={index} className="border-b hover:bg-gray-100"> */}
              {batters.map((batter, index) =>
                index === 0 ? (
                  <tr key={batter.name} className="hover:bg-gray-100">
                    <td className="p-4 font-semibold pos first">
                      {batter.pos}
                    </td>
                    <td className="p-4 font-semibold text-uppercase flag">
                      <img
                        src={`/assets/img/flags/${batter.team
                          .toLowerCase()
                          .replace(/\s+/g, "")}.png`}
                        alt={batter.team}
                        className="inline-block w-6 h-6 mr-2 uppercase"
                      />{" "}
                      {batter.team}
                    </td>
                    <td className="p-4 name">{batter.name}</td>
                    <td className="p-4 name">{batter.matches}</td>
                    <td className="p-4 name">{batter.runs}</td>
                    {/* <td className="p-4 runs">
                        <img className="plyer-image" src={`https://images.icc-cricket.com/icc-web/image/upload/t_player-headshot-portrait/prd/assets/players/generic/colored/10129.png`} alt="pakistan"/>
                      </td> */}
                  </tr>
                ) : (
                  <tr key={batter.name} className="border-b hover:bg-gray-100">
                    <td className="p-4 font-semibold pos">{batter.pos}</td>
                    <td className="p-4 font-semibold text-uppercase">
                      <img
                        src={`/assets/img/flags/${batter.team
                          .toLowerCase()
                          .replace(/\s+/g, "")}.png`}
                        alt={batter.team}
                        className="inline-block w-6 h-6 mr-2 uppercase"
                      />{" "}
                      {batter.team}
                    </td>
                    <td className="p-4">{batter.name}</td>
                    <td className="p-4 name">{batter.matches}</td>
                    <td className="p-4">{batter.runs}</td>
                    {/* <td className="p-4"></td> */}
                  </tr>
                )
              )}

              {/* ))} */}
            </tbody>
          </table>
        </div>

        <div className="section-title text-center mt-4">
          {/* <h6 className="wow fadeInUp">Top Performers</h6>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            MOST WICKETS
          </h2> */}
          
          <h6 className="wow fadeInUp">MOST WICKETS</h6>
        </div>
        {/* <div className="mb-4 text-center">
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
      </div> */}
        <div className="overflow-x-auto">
          <table className="w-full  text-left justify-between point-table top-performer">
            <thead>
              <tr className="bg-gray-200 text-gray-700 font-semibold">
                <th className="prl-4">Pos</th>
                <th className="prl-4">Team</th>
                <th className="prl-4">Player</th>
                <th className="prl-4">Matches</th>
                {/* <th className="prl-4">Overs</th> */}
                <th className="prl-4">Wickets</th>
                {/* <th className="prl-4"></th> */}
              </tr>
            </thead>
            <tbody>
              {/* {standingsData[selectedGroup].map((team, index) => ( */}
              {/* <tr key={index} className="border-b hover:bg-gray-100"> */}
              {bowlers.map((bowlers, index) =>
                index === 0 ? (
                  <tr key={bowlers.name} className="hover:bg-gray-100">
                    <td className="p-4 font-semibold pos first">
                      {bowlers.pos}
                    </td>
                    <td className="p-4 font-semibold text-uppercase flag">
                      <img
                        src={`/assets/img/flags/${bowlers.team
                          .toLowerCase()
                          .replace(/\s+/g, "")}.png`}
                        alt={bowlers.team}
                        className="inline-block w-6 h-6 mr-2 uppercase"
                      />{" "}
                      {bowlers.team}
                    </td>
                    <td className="p-4 name">{bowlers.name}</td>
                    <td className="p-4 name">{bowlers.matches}</td>
                    {/* <td className="p-4 name">{bowlers.overs}</td> */}
                    <td className="p-4 name">{bowlers.wickets}</td>
                    {/* <td className="p-4 runs">
                        <img className="plyer-image" src={`https://images.icc-cricket.com/icc-web/image/upload/t_player-headshot-portrait/prd/assets/players/generic/colored/10129.png`} alt="pakistan"/>
                      </td> */}
                  </tr>
                ) : (
                  <tr key={bowlers.name} className="border-b hover:bg-gray-100">
                    <td className="p-4 font-semibold pos">{bowlers.pos}</td>
                    <td className="p-4 font-semibold text-uppercase">
                      <img
                        src={`/assets/img/flags/${bowlers.team
                          .toLowerCase()
                          .replace(/\s+/g, "")}.png`}
                        alt={bowlers.team}
                        className="inline-block w-6 h-6 mr-2 uppercase"
                      />{" "}
                      {bowlers.team}
                    </td>
                    <td className="p-4">{bowlers.name}</td>
                    <td className="p-4 name">{bowlers.matches}</td>

                    {/* <td className="p-4">{bowlers.overs}</td> */}
                    <td className="p-4">{bowlers.wickets}</td>
                    {/* <td className="p-4"></td> */}
                  </tr>
                )
              )}

              {/* ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TopPerformers;
