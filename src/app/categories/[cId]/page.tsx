import React from "react";

type CategoryShowProps = {
  params: Promise<{
    cId: string;
  }>;
};

async function CategoryShow({ params }: CategoryShowProps) {
  const { cId } = await params;
  return <div>{cId}</div>;
}

export default CategoryShow;
