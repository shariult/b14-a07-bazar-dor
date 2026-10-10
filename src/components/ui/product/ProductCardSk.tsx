import React, { ComponentPropsWithoutRef } from "react";

type ProductCardSkProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function ProductCardSk(props: ProductCardSkProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={`flex flex-col gap-6 p-6 bg-gray-50 rounded-2xl shadow-sm ${className ? className : ""}`}
      {...rest}
    >
      <div className="flex gap-4 items-center">
        <span className="inline-block w-16 h-16 skeleton rounded-2xl text-4xl"></span>

        <div>
          <h3 className="w-32 h-6 skeleton mb-4"></h3>
          <span className="inline-block w-20 h-4 skeleton"></span>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">আজকের দাম</span>
          <span className="flex gap-2 items-end">
            <span className="inline-block w-12 h-12 skeleton"></span>
            <span className="text-lg font-medium">টাকা</span>
          </span>
        </div>

        <span className="inline-block skeleton w-16 h-8 rounded-full"></span>
      </div>
    </div>
  );
}

export default ProductCardSk;
