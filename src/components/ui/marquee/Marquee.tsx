import React, { ComponentPropsWithoutRef, Suspense } from "react";
import MarqueeItems from "./MarqueeItems";
import MarqueeItemsSk from "./MarqueeItemsSk";

type MarqueeProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function Marquee(props: MarqueeProps) {
  const { className, children, ...rest } = props;

  return (
    <div
      className={`relative flex overflow-hidden bg-white border-b border-b-gray-100 ${className ? className : ""}`}
      {...rest}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        <Suspense fallback={<MarqueeItemsSk />}>
          <MarqueeItems />
        </Suspense>
      </div>
      <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap">
        <Suspense fallback={<MarqueeItemsSk />}>
          <MarqueeItems />
        </Suspense>
      </div>
    </div>
  );
}

export default Marquee;
