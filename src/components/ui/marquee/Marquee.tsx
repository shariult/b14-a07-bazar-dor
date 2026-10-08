import React from "react";
import MarqueeItems from "./MarqueeItems";

function Marquee() {
  return (
    <div className="relative flex overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <MarqueeItems />
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
        <MarqueeItems />
      </div>
    </div>
  );
}

export default Marquee;
