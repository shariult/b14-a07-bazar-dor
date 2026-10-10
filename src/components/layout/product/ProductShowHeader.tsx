import React, { ComponentPropsWithoutRef } from "react";
import { Product } from "@/types";
import Container from "@/components/ui/Container";
import PriceChangeIndicator from "@/components/ui/product/PriceChangeIndicator";
import { formatUnit, toBanglaNum } from "@/lib/utils";

type ProductShowHeaderProps = {
  productData: Product;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function ProductShowHeader(props: ProductShowHeaderProps) {
  const { productData, className, children, ...rest } = props;

  return (
    <Container
      el={"header"}
      boxClassName={`bg-gray-50 rounded-2xl border border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8 ${className ? className : ""}`}
      setYSpace="py-8"
      {...rest}
    >
      <div className="flex flex-col md:flex-row text-center md:text-left gap-4">
        <p className="bg-gray-100 rounded-xl p-8 text-5xl">
          {productData.image}
        </p>
        <div>
          <h2 className="heading-2">{productData.nameBn}</h2>

          <p className="flex items-center justify-center md:justify-start gap-2 text-gray-500 mb-2">
            প্রতি {formatUnit(productData.unit)}
            <span className="inline-block h-0.75 w-0.75 rounded-full bg-gray-700"></span>
            {productData.categoryNameBn}
          </p>

          <p className="flex flex-wrap gap-1 md:gap-2 items-center">
            গতকালের তুলনায় আজ দাম
            <strong>
              {productData.change.dir === "up"
                ? "বেড়েছে"
                : productData.change.dir === "down"
                  ? "কমেছে"
                  : "সমান আছে"}
            </strong>
            <span className="inline-block h-0.75 w-0.75 rounded-full bg-gray-700"></span>
            {toBanglaNum(productData.today - productData.yesterday)} টাকা
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center px-8 py-4 rounded-xl bg-gray-100">
        <p className="text-gray-500">আজকের দাম</p>
        <p className="text-4xl font-bold">{toBanglaNum(productData.today)}</p>
        <p className="text-gray-500">টাকা / {formatUnit(productData.unit)}</p>
        <PriceChangeIndicator change={productData.change} />
      </div>
    </Container>
  );
}

export default ProductShowHeader;
