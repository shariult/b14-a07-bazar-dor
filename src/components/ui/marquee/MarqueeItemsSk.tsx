import React, { ComponentPropsWithoutRef } from "react";

type MarqueeItemsSkProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function MarqueeItemsSk(props: MarqueeItemsSkProps) {
  const { className, children, ...rest } = props;

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <>
      {data.slice(0, 10).map((item) => {
        return (
          <div
            key={item}
            className={`flex gap-3 items-center px-4 py-2 border-x border-x-gray-100 ${className ? className : ""}`}
            {...rest}
          >
            <div className="flex">
              <span className="mr-1 h-6 w-6 skeleton"></span>
              <span className="h-6 w-20 skeleton"></span>
            </div>

            <span className="h-6 w-10 skeleton"></span>
            <span className="h-6 w-8 skeleton"></span>
          </div>
        );
      })}
    </>
  );
}

export default MarqueeItemsSk;
