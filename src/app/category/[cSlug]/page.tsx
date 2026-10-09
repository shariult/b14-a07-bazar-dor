import React from "react";
import { Category, Product } from "@/types";
import CategoryShowHero from "@/components/layout/category/CategoryShowHero";
import CategoryShowProducts from "@/components/layout/category/CategoryShowProducts";
import { getProductsByCategory } from "@/lib/productActions";
import { getCategoryShow } from "@/lib/categoryActions";

type CategoryShowProps = {
  params: Promise<{
    cSlug: string;
  }>;
};

async function CategoryShow({ params }: CategoryShowProps) {
  const { cSlug } = await params;
  const cData = (await getCategoryShow(cSlug)) as Category;
  const data = (await getProductsByCategory(cSlug)) as Product[];

  return (
    <div className="flex flex-col gap-4 py-12">
      <CategoryShowHero categoryData={cData} numOfProducts={data.length} />

      <CategoryShowProducts productData={data} />
    </div>
  );
}

export default CategoryShow;
