import React from "react";
import Container from "@/components/ui/Container";

type ProductShowProps = {
  params: Promise<{
    pSlug: string;
  }>;
};

async function ProductShow({ params }: ProductShowProps) {
  // const { pSlug } = await params;
  // const pId = pSlug.split("-")[0];

  // const res = await fetch(`${process.env.API_URL}/products/${pId}`);
  // if (!res.ok) {
  //   console.log("Something went wrong!");
  //   return;
  // }

  // const data = await res.json();
  // console.log(data);

  return (
    <>
      <Container el={"header"}>ProductShow</Container>;
    </>
  );
}

export default ProductShow;
