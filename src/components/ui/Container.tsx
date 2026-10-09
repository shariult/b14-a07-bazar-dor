import React, { ComponentPropsWithoutRef, ElementType } from "react";

type ContainerProps<T extends ElementType> = {
  children: React.ReactNode;
  el?: T;
  className?: string;
  boxClassName?: string;
  setYSpace?: string;
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>(props: ContainerProps<C>) {
  const { children, el, className, boxClassName, setYSpace, ...rest } = props;
  const El = el || "section";

  let classes = "p-0";
  if (className) {
    classes = `${classes} ${className}`;
  }

  return (
    <El className={`${classes}`} {...rest}>
      <div
        className={`container mx-auto px-6 ${setYSpace ?? "py-20"} ${boxClassName ? boxClassName : ""}`}
      >
        {children}
      </div>
    </El>
  );
}

export default Container;
