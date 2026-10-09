import React from "react";
import { Product } from "@/types";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/product/ProductCard";
import { toBanglaNum } from "@/lib/utils";
import { getProductIndex } from "@/lib/productActions";

async function HomeSections() {
  const data = (await getProductIndex()) as Product[];
  const increasedPrice = data.filter((item) => item.change.dir === "up");
  const decreasedPrice = data.filter((item) => item.change.dir === "down");

  return (
    <>
      <Container>
        <h2 className="heading-2 flex gap-2 mb-8">
          <span className="text-red-700">▲</span> আজ দাম বেড়েছে
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {increasedPrice.map((item) => {
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

      <Container>
        <h2 className="heading-2 flex gap-2 mb-8">
          <span className="text-green-700">▼</span> আজ দাম কমেছে
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {decreasedPrice.map((item) => {
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

      <Container id="সব-পণ্য">
        <h2 className="heading-2 flex flex-col gap-2 mb-8">
          সব পণ্য
          <span className="block text-base font-normal text-gray-500">
            মোট {toBanglaNum(data.length)}টি পণ্য দেখানো হচ্ছে
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {data.map((item) => {
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

export default HomeSections;
