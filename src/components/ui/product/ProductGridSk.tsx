import React, { ComponentPropsWithoutRef } from "react";
import ProductCardSk from "./ProductCardSk";

type ProductGridSkProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function ProductGridSk(props: ProductGridSkProps) {
  const { className, children, ...rest } = props;
  const dummyArr = [1, 2, 3, 4, 5, 6];
  return (
    <section className="container mx-auto mb-8">
      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${className ? className : ""}`}
        {...rest}
      >
        {dummyArr.map((item) => {
          return <ProductCardSk key={item} />;
        })}
      </div>
    </section>
  );
}

export default ProductGridSk;
