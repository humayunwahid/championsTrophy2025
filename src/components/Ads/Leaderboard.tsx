"use client";

import React, { useState, useEffect } from "react";
import { Bling as GPT } from "react-gpt";

const Leaderboard = () => {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="mt-5">
        <center>
      {windowSize && windowSize.width > 768 ? (
        <>
        {/* <h1>Desktop</h1> */}
      
        <GPT
          adUnitPath="/67551462/A-Sports-RoS"
          slotSize={[[970, 250], [750, 300], [950, 90], [728, 90]]}
        />
        </>
      ) : (
        <>
        
        {/* <h1>Mobile</h1> */}
        <GPT
          adUnitPath="/67551462/A-Sports-RoS"
          slotSize={[[320, 100], [320, 50]]}
        />
        </>

      )}
      </center>
    </div>
  );
};

export default Leaderboard;
