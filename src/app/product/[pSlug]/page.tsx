import React from "react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";
import { Product } from "@/types";
import ProductShowHeader from "@/components/layout/product/ProductShowHeader";
import ProductShowSummary from "@/components/layout/product/ProductShowSummary";
import ProductShowTable from "@/components/layout/product/ProductShowTable";

type ProductShowProps = {
  params: Promise<{
    pSlug: string;
  }>;
};

async function ProductShow({ params }: ProductShowProps) {
  const { pSlug } = await params;
  const pId = pSlug.split("-")[0];

  const res = await fetch(`${process.env.API_URL}/products/${pId}`);
  if (!res.ok) {
    console.log("Something went wrong!");
    return;
  }
  const data = (await res.json()) as Product;

  return (
    <>
      <div className="container mx-auto px-6 py-8">
        <Breadcrumbs product={data} />
      </div>

      <ProductShowHeader className="mb-8" productData={data} />

      <Container
        className="mb-8"
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
