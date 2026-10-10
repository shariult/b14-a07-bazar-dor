import React, { ComponentPropsWithoutRef } from "react";
import { Product } from "@/types";
import { formatUnit, toBanglaNum } from "@/lib/utils";

type ProductShowSummaryProps = {
  productData: Product;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function ProductShowSummary(props: ProductShowSummaryProps) {
  const { productData, className, children, ...rest } = props;

  const minMaxObj = productData.markets.reduce(
    function (acc, item) {
      if (acc.min === 0 || item.min < acc.min) {
        acc.min = item.min;
      }
      if (acc.max === 0 || item.max > acc.max) {
        acc.max = item.max;
      }
      return acc;
    },
    { min: 0, max: 0, average: 0 },
  );
  minMaxObj.average = (minMaxObj.max + minMaxObj.min) / 2;

  return (
    <>
      <h3 className="heading-3 mb-4">দামের সারসংক্ষেপ</h3>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ${className ? className : ""}`}
        {...rest}
      >
        <div className="flex flex-col gap-1 bg-white border border-gray-300 rounded-xl p-8">
          <p className="text-sm text-gray-500">সর্বনিম্ন দাম</p>
          <p className="flex gap-2 items-end text-green-700">
            <span className="text-3xl font-bold">
              {toBanglaNum(minMaxObj.min)}
            </span>
            <span className="text-xl">টাকা</span>
          </p>
          <p className="text-sm text-gray-500">সবচেয়ে কম দামের বাজার</p>
        </div>

        <div className="flex flex-col gap-1 border border-gray-300 rounded-xl p-8">
          <p className="text-sm text-gray-500">সর্বাধিক দাম</p>
          <p className="flex gap-2 items-end text-red-700">
            <span className="text-3xl font-bold">
              {toBanglaNum(minMaxObj.max)}
            </span>
            <span className="text-xl">টাকা</span>
          </p>
          <p className="text-sm text-gray-500">সবচেয়ে বেশি দামের বাজার</p>
        </div>

        <div className="flex flex-col gap-1 border border-gray-300 rounded-xl p-8">
          <p className="text-sm text-gray-500">গড় দাম</p>
          <p className="flex gap-2 items-end text-green-700">
            <span className="text-3xl font-bold">
              {toBanglaNum(Math.floor(minMaxObj.average))}
            </span>
            <span className="text-xl">টাকা</span>
          </p>
          <p className="text-sm text-gray-500">
            প্রতি {formatUnit(productData.unit)}-এর হিসাবে
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductShowSummary;
