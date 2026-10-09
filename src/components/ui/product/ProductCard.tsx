import React from "react";
import { Product } from "@/types";
import Link, { LinkProps } from "next/link";
import { formatUnit, toBanglaNum } from "@/lib/utils";
import PriceChangeIndicator from "../PriceChangeIndicator";

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
          <span className="text-gray-500">
            প্রতি {formatUnit(productData.unit)}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">আজকের দাম</span>
          <span className="flex gap-2 items-end">
            <span className="text-3xl font-bold">
              {toBanglaNum(productData.today)}
            </span>
            <span className="text-lg font-medium">টাকা</span>
          </span>
        </div>

        <PriceChangeIndicator
          change={productData.change}
          className="bg-gray-100 px-4 py-1"
        />
      </div>
    </Link>
  );
}

export default ProductCard;
