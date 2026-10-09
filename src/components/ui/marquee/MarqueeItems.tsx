import React, { ComponentPropsWithoutRef } from "react";
import { formatUnit, toBanglaNum } from "@/lib/utils";
import { Product } from "@/types";

type MarqueeItemsProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"p">;

async function MarqueeItems(props: MarqueeItemsProps) {
  const { className, children, ...rest } = props;

  const res = await fetch(`${process.env.API_URL}/products`);
  if (!res.ok) {
    console.log("Something went wrong!");
    return;
  }

  const data = (await res.json()) as Product[];

  return (
    <>
      {data.slice(0, 10).map((item) => {
        return (
          <p
            key={item.id}
            className={`flex gap-3 px-4 py-2 border-x border-x-gray-100 ${className ? className : ""}`}
            {...rest}
          >
            <span>
              <span className="inline-block mr-1">{item.image}</span>
              <span className="inline-block font-medium">{item.nameBn}</span>
            </span>

            <span className="inline-block">
              {toBanglaNum(item.today)} টাকা/{formatUnit(item.unit)}
            </span>

            <span
              className={`${item.change.dir === "up" ? "text-red-700" : item.change.dir === "down" ? " text-green-700" : "text-gray-700"}`}
            >
              {item.change.dir === "up" && <>▲</>}
              {item.change.dir === "down" && <>▼</>}
              {item.change.dir === "flat" && <>&mdash;</>}
              {toBanglaNum(item.change.pct)} %
            </span>
          </p>
        );
      })}
    </>
  );
}

export default MarqueeItems;
