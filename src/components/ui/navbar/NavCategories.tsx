import React, { ComponentPropsWithoutRef } from "react";
import { getCategoryIndex } from "@/lib/categoryActions";
import NavLink from "./NavLink";

type NavCategoriesProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"li">;

async function NavCategories(props: NavCategoriesProps) {
  const { className, children, ...rest } = props;
  const result = await getCategoryIndex();

  if (result.isSuccess && result.data.length === 0) {
    return <p>ক্যাটেগরি লোড করা যায়নি!</p>;
  }

  if (!result.isSuccess) {
    return <p className="text-red-500 py-2">ক্যাটেগরি লোড করা যায়নি!</p>;
  }

  return (
    <>
      {result.data?.length > 0 &&
        result.data.map((item) => (
          <li
            key={item.id}
            className={`${className ? className : ""}`}
            {...rest}
          >
            <NavLink href={`/category/${item.slug}`} categoryData={item} />
          </li>
        ))}
    </>
  );
}

export default NavCategories;
