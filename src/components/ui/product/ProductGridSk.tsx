import React, { ComponentPropsWithoutRef } from "react";
import ProductCardSk from "./ProductCardSk";
import Container from "../Container";

type ProductGridSkProps = {
  className?: string;
  setXSpace?: string;
  setYSpace?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function ProductGridSk(props: ProductGridSkProps) {
  const { setXSpace, setYSpace, className, children, ...rest } = props;
  const dummyArr = [1, 2, 3, 4, 5, 6];
  return (
    <Container
      className="mb-8"
      setXSpace={`${setXSpace ?? "px-0"}`}
      setYSpace={`${setYSpace ?? "py-20"}`}
    >
      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${className ? className : ""}`}
        {...rest}
      >
        {dummyArr.map((item) => {
          return <ProductCardSk key={item} />;
        })}
      </div>
    </Container>
  );
}

export default ProductGridSk;
