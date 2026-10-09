import React, { ComponentPropsWithoutRef } from "react";
import { formatUnit, toBanglaNum } from "@/lib/utils";
import { Product } from "@/types";
import PriceChangeIndicator from "../PriceChangeIndicator";
import { getProductIndex } from "@/lib/productActions";

type MarqueeItemsProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"p">;

async function MarqueeItems(props: MarqueeItemsProps) {
  const { className, children, ...rest } = props;
  const data = (await getProductIndex()) as Product[];

  return (
    <>
      {data.slice(0, 10).map((item) => {
        return (
          <div
            key={item.id}
            className={`flex gap-3 px-4 py-2 border-x border-x-gray-100 ${className ? className : ""}`}
            {...rest}
          >
            <p>
              <span className="inline-block mr-1">{item.image}</span>
              <span className="inline-block font-medium">{item.nameBn}</span>
            </p>

            <span className="inline-block">
              {toBanglaNum(item.today)} টাকা/{formatUnit(item.unit)}
            </span>

            <PriceChangeIndicator change={item.change} />
          </div>
        );
      })}
    </>
  );
}

export default MarqueeItems;
