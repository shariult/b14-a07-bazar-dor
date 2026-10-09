import React, { ComponentPropsWithoutRef } from "react";
import { PriceChange } from "@/types";
import { toBanglaNum } from "@/lib/utils";

type PriceChangeIndicatorProps = {
  change: PriceChange;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"p">;

function PriceChangeIndicator(props: PriceChangeIndicatorProps) {
  const { className, children, change, ...rest } = props;

  return (
    <>
      <p
        className={`${change.dir === "up" ? "text-red-500" : change.dir === "down" ? "text-green-500" : "text-gray-500"}  rounded-full  ${className ? className : ""}`}
        {...rest}
      >
        {change.dir === "up" && <>▲</>}
        {change.dir === "down" && <>▼</>}
        {change.dir === "flat" && <>&mdash;</>}
        &nbsp;{toBanglaNum(change.pct)} %
      </p>
    </>
  );
}

export default PriceChangeIndicator;
