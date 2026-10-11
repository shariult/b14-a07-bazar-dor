import React, { ComponentPropsWithoutRef } from "react";
import { Category } from "@/types";
import Container from "@/components/ui/Container";
import { toBanglaNum } from "@/lib/utils";

type CategoryShowHeroProps = {
  categoryData: Category;
  numOfProducts: number;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function CategoryShowHero(props: CategoryShowHeroProps) {
  const { categoryData, numOfProducts, className, children, ...rest } = props;

  return (
    <div
      className={`p-6 bg-gray-50 rounded-xl border border-gray-200 flex gap-4 ${className ? className : ""}`}
      {...rest}
    >
      <p className="text-5xl">{categoryData.icon}</p>
      <div>
        <h2 className="heading-2">{categoryData.nameBn}</h2>
        <p className="text-gray-500">
          {toBanglaNum(numOfProducts)}টি পণ্যের আজকের দাম ও পরিবর্তন
        </p>
      </div>
    </div>
  );
}

export default CategoryShowHero;
