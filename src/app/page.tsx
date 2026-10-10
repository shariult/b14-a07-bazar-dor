import Hero from "@/components/layout/homepage/Hero";
import HomeSections from "@/components/layout/homepage/HomeSections";
import ProductGridSk from "@/components/ui/product/ProductGridSk";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<ProductGridSk />}>
        <HomeSections />
      </Suspense>
    </>
  );
}
