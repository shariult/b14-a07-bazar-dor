import React from "react";
import Link, { LinkProps } from "next/link";
import { Product } from "@/types";
import { formatUnit, toBanglaNum } from "@/lib/utils";

type ProductCardProps = {
  productData: Product;
  className?: string;
  children?: React.ReactNode;
} & LinkProps;

function ProductCard(props: ProductCardProps) {
  const { productData, className, href, ...rest } = props;

  return (
    <Link
      href={href}
      key={productData.id}
      className={`flex flex-col gap-6 p-6 bg-gray-50 rounded-2xl shadow-sm ${className ? className : ""}`}
      {...rest}
    >
      <div className="flex gap-4 items-center">
        <span className="p-4 bg-gray-100 rounded-2xl text-4xl">
          {productData.image}
        </span>

        <div>
          <h3 className="heading-3">{productData.nameBn}</h3>
          <span>প্রতি {formatUnit(productData.unit)}</span>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <span>আজকের দাম</span>
          <span className="flex gap-2 items-end">
            <span className="text-3xl font-bold">
              {toBanglaNum(productData.today)}
            </span>
            <span className="text-lg font-medium">টাকা</span>
          </span>
        </div>

        <p
          className={`${productData.change.dir === "up" ? "text-red-500" : productData.change.dir === "down" ? "text-green-500" : "text-gray-700"} px-4 py-1 rounded-full bg-gray-100`}
        >
          {productData.change.dir === "up" && "▲"}
          {productData.change.dir === "down" && "▼"}
          &nbsp;{toBanglaNum(productData.change.pct)} %
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
