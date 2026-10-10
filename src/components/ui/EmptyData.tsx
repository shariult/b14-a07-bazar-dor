import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";

type EmptyDataProps = {
  message?: string;
  setYSpace?: string;
  hideBtn?: boolean;
  isError?: boolean;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function EmptyData(props: EmptyDataProps) {
  const {
    message,
    setYSpace,
    hideBtn = false,
    isError = false,
    className,
    children,
    ...rest
  } = props;

  return (
    <div
      className={`flex flex-col justify-center items-center ${setYSpace ?? "py-20"} text-center text-xl rounded-xl  border border-dashed ${isError ? "border-red-500 text-red-500" : "border-gray-500 bg-gray-200"} ${className ? className : ""}`}
      {...rest}
    >
      <p className="mb-6">{message ?? "কোন তথ্য পাওয়া যায় নি!"}</p>
      {!hideBtn && (
        <Link href="/" className="btn bg-pr hover:bg-pr-hover text-pr-content">
          হোম পেজে ফিরে যান
        </Link>
      )}
    </div>
  );
}

export default EmptyData;
