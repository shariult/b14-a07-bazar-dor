import React, { ComponentPropsWithoutRef } from "react";

type NavCategoriesSkProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"li">;

function NavCategoriesSk(props: NavCategoriesSkProps) {
  const { className, children, ...rest } = props;

  const data = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      {data.map((item) => (
        <li
          key={item}
          className={`hidden md:block ${className ? className : ""}`}
          {...rest}
        >
          <div className="flex gap-2 py-2 px-4 md:justify-center items-center hover:bg-gray-100 md:rounded-lg">
            <span className="w-5 h-5 skeleton rounded"></span>
            <span className="w-16 h-4 skeleton rounded-lg"></span>
          </div>
        </li>
      ))}
    </>
  );
}

export default NavCategoriesSk;
