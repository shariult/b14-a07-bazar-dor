import React from "react";
import { notFound } from "next/navigation";
import CategoryShowHero from "@/components/layout/category/CategoryShowHero";
import CategoryShowProducts from "@/components/layout/category/CategoryShowProducts";
import EmptyData from "@/components/ui/EmptyData";
import { getProductsByCategory } from "@/lib/productActions";
import { getCategoryShow } from "@/lib/categoryActions";

type CategoryShowProps = {
  params: Promise<{
    cSlug: string;
  }>;
};

async function CategoryShow({ params }: CategoryShowProps) {
  const { cSlug } = await params;
  const cResult = await getCategoryShow(cSlug);
  const pResult = await getProductsByCategory(cSlug);

  if (cResult.isSuccess && pResult.isSuccess && pResult.data.length === 0) {
    return (
      <EmptyData
        className="container mx-auto"
        message="কোন পণ্য পাওয়া যায় নি!"
      />
    );
  }

  if (!cResult.isSuccess || !pResult.isSuccess) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-4 py-12">
      <CategoryShowHero
        categoryData={cResult.data}
        numOfProducts={pResult.data.length}
      />

      <CategoryShowProducts productData={pResult.data} />
    </div>
  );
}

export default CategoryShow;
