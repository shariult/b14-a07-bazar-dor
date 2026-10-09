import React from "react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";
import { Product } from "@/types";
import Image from "next/image";
import PriceChangeIndicator from "@/components/ui/PriceChangeIndicator";
import { formatUnit, toBanglaNum } from "@/lib/utils";
import ProductShowHeader from "@/components/layout/product/ProductShowHeader";

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
      <div className="container mx-auto py-8">
        <Breadcrumbs product={data} />
      </div>
      <ProductShowHeader productData={data} />
    </>
  );
}

export default ProductShow;
