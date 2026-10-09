"use client";

import React, { ComponentPropsWithoutRef, useState } from "react";
import { Product } from "@/types";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/product/ProductCard";
import { toBanglaNum } from "@/lib/utils";
import EmptyData from "@/components/ui/EmptyData";

type CategoryShowProductsProps = {
  productData: Product[];
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function CategoryShowProducts(props: CategoryShowProductsProps) {
  const { productData, className, children, ...rest } = props;
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">(
    "default",
  );
  function sortByChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortBy(e.target.value as "default" | "price-asc" | "price-desc");
  }

  let sortedData = [...productData];

  if (sortBy === "price-asc") {
    sortedData = sortedData.sort((a, b) => {
      return a.today - b.today;
    });
  }

  if (sortBy === "price-desc") {
    sortedData = sortedData.sort((a, b) => {
      return b.today - a.today;
    });
  }

  return (
    <>
      <Container
        boxClassName={`flex justify-end bg-gray-50 rounded-xl border border-gray-200 ${className ? className : ""}`}
        setYSpace="py-4"
        {...rest}
      >
        <div className="flex gap-2 items-center">
          <label htmlFor="cat-sort">সাজান</label>
          <select
            id="cat-sort"
            defaultValue="default"
            className="select"
            onChange={(e) => sortByChangeHandler(e)}
          >
            <option value="default">ডিফল্ট</option>
            <option value="price-asc">দাম: কম থেকে বেশি</option>
            <option value="price-desc">দাম: বেশি থেকে কম</option>
          </select>
        </div>
      </Container>

      <Container setYSpace="py-0" setXSpace="px-0">
        <p className="text-gray-500">
          মোট {toBanglaNum(productData.length)}টি পণ্য দেখানো হচ্ছে
        </p>
      </Container>

      <Container setYSpace="py-0" setXSpace="px-0">
        {sortedData.length === 0 && <EmptyData />}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedData?.length > 0 &&
            sortedData.map((item) => {
              return (
                <ProductCard
                  href={`/product/${item.id}-${item.slug}`}
                  key={item.id}
                  productData={item}
                />
              );
            })}
        </div>
      </Container>
    </>
  );
}

export default CategoryShowProducts;
