"use client";

import React, { useState, useEffect } from "react";
import { Bling as GPT } from "react-gpt";

const Leaderboard = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-5">
      {windowSize.width > 768 ? (
        <>
        {/* <h2>Desktop</h2> */}
        <GPT
          adUnitPath="/67551462/A-Sports-RoS"
          slotSize={[[970, 250], [750, 300], [950, 90], [728, 90]]}
        />
        </>
      ) : (
        <>
        {/* <h2>Mobile</h2> */}
        <GPT
          adUnitPath="/67551462/A-Sports-RoS"
          slotSize={[[320, 100], [320, 50]]}
        />
        </>
      )}
    </div>
  );
};

export default Leaderboard;
