import React, { ComponentPropsWithoutRef } from "react";
import { Category } from "@/types";
import Link from "next/link";
import { getCategoryIndex } from "@/lib/categoryActions";

type NavLinksProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"li">;

async function NavLinks(props: NavLinksProps) {
  const { className, children, ...rest } = props;
  const data = (await getCategoryIndex()) as Category[];
  return (
    <>
      {data?.length === 0 && <p>কোন তথ্য পাওয়া যায় নি!</p>}

      {data?.length > 0 &&
        data.map((item) => (
          <li
            key={item.id}
            className={`${className ? className : ""}`}
            {...rest}
          >
            <Link
              href={`/category/${item.slug}`}
              className="flex gap-2 py-2 px-4 md:justify-center hover:bg-gray-100 md:rounded-lg"
            >
              <span>{item.icon}</span>
              <span>{item.nameBn}</span>
            </Link>
          </li>
        ))}
    </>
  );
}

export default NavLinks;
