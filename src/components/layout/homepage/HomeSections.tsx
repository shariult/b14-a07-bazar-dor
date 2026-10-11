import React from "react";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/product/ProductCard";
import EmptyData from "@/components/ui/EmptyData";
import { toBanglaNum } from "@/lib/utils";
import { getProductIndex } from "@/lib/productActions";

async function HomeSections() {
  const result = await getProductIndex();

  if (result.isSuccess && result.data.length === 0) {
    return (
      <EmptyData
        className="max-w-330 container mx-auto mb-10"
        hideBtn={true}
        message="কোন পণ্য পাওয়া যায় নি!"
      />
    );
  }

  if (!result.isSuccess) {
    return (
      <EmptyData
        className="max-w-330 container mx-auto mb-10"
        hideBtn={true}
        isError={true}
        message="কিছু একটা সমস্যা হয়েছে!"
      />
    );
  }

  const { data } = result;

  const increasedPrice = data
    .filter((item) => item.change.dir === "up")
    .sort((a, b) => {
      return b.change.pct - a.change.pct;
    })
    .slice(0, 6);

  const decreasedPrice = data
    .filter((item) => item.change.dir === "down")
    .sort((a, b) => {
      return a.change.pct - b.change.pct;
    })
    .slice(0, 6);

  return (
    <Container setXSpace="px-0" boxClassName="flex flex-col gap-20">
      <div>
        <h2 className="heading-2 flex gap-2 mb-8">
          <span className="text-red-700">▲</span> আজ দাম বেড়েছে
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {increasedPrice?.length > 0 &&
            increasedPrice.map((item) => {
              return (
                <ProductCard
                  href={`/product/${item.id}-${item.slug}`}
                  key={item.id}
                  productData={item}
                />
              );
            })}
        </div>
      </div>

      <div>
        <h2 className="heading-2 flex gap-2 mb-8">
          <span className="text-green-700">▼</span> আজ দাম কমেছে
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {decreasedPrice?.length > 0 &&
            decreasedPrice.map((item) => {
              return (
                <ProductCard
                  href={`/product/${item.id}-${item.slug}`}
                  key={item.id}
                  productData={item}
                />
              );
            })}
        </div>
      </div>

      <div id="সব-পণ্য">
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
      </div>
    </Container>
  );
}

export default HomeSections;
