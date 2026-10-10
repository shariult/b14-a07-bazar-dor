import React, { ComponentPropsWithoutRef } from "react";
import PriceChangeIndicator from "../product/PriceChangeIndicator";
import { getProductIndex } from "@/lib/productActions";
import { formatUnit, toBanglaNum } from "@/lib/utils";

type MarqueeItemsProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"p">;

async function MarqueeItems(props: MarqueeItemsProps) {
  const { className, children, ...rest } = props;
  const result = await getProductIndex();

  if ((result.isSuccess && result.data.length === 0) || !result.isSuccess) {
    let dummyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <>
        {dummyArr.map((item) => {
          return (
            <div
              key={item}
              className={`flex gap-3 px-4 py-2 border-x border-x-gray-100`}
            >
              <p>
                <span className="inline-block font-medium">
                  কোন পণ্য পাওয়া যায় নি!
                </span>
              </p>
            </div>
          );
        })}
      </>
    );
  }

  const { data } = result;

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
