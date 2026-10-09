import React, { ComponentPropsWithoutRef } from "react";

type EmptyDataProps = {
  emptyText?: string;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function EmptyData(props: EmptyDataProps) {
  const { emptyText, className, children, ...rest } = props;

  return (
    <p
      className={`flex justify-center py-20 text-center text-xl rounded-xl bg-gray-200 border border-gray-500 border-dashed ${className ? className : ""}`}
      {...rest}
    >
      {emptyText ?? "কোন তথ্য পাওয়া যায় নি!"}
    </p>
  );
}

export default EmptyData;
