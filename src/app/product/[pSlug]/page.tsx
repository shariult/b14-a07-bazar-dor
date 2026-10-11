import React from "react";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";
import ProductShowHeader from "@/components/layout/product/ProductShowHeader";
import ProductShowSummary from "@/components/layout/product/ProductShowSummary";
import ProductShowTable from "@/components/layout/product/ProductShowTable";
import { getProductShow } from "@/lib/productActions";

type ProductShowProps = {
  params: Promise<{
    pSlug: string;
  }>;
};

async function ProductShow({ params }: ProductShowProps) {
  const { pSlug } = await params;
  const pId = pSlug.split("-")[0];
  const result = await getProductShow(pId);

  if ((result.isSuccess && !result.data) || !result.isSuccess) {
    notFound();
  }

  const { data } = result;

  return (
    <>
      <div className="max-w-330 container mx-auto px-6 py-8">
        <Breadcrumbs product={data} />
      </div>

      <ProductShowHeader className="mb-8" productData={data} />

      <Container
        className="mb-8 mx-6 xl:mx-6"
        boxClassName="bg-gray-50 rounded-xl border border-gray-200"
        setYSpace="py-8"
      >
        <ProductShowSummary productData={data} className="mb-12" />

        <ProductShowTable productData={data} />
      </Container>
    </>
  );
}

export default ProductShow;
