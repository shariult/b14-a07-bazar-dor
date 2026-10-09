import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { Product } from "@/types";

type BreadcrumbsProps = {
  product: Product;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function Breadcrumbs(props: BreadcrumbsProps) {
  const { product, className, children, ...rest } = props;

  return (
    <div
      className={`breadcrumbs text-sm ${className ? className : ""}`}
      {...rest}
    >
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href={`/category/${product.category}`}>
            {product.categoryNameBn}
          </Link>
        </li>
        <li>{product.nameBn}</li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;
