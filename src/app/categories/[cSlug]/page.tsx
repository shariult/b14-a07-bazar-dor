import React from "react";
import Container from "@/components/ui/Container";

type CategoryShowProps = {
  params: Promise<{
    cSlug: string;
  }>;
};

async function CategoryShow({ params }: CategoryShowProps) {
  const { cSlug } = await params;
  return <Container el={"header"}>{cSlug}</Container>;
}

export default CategoryShow;
