import React, { ComponentPropsWithoutRef } from "react";
import { category } from "@/types";
import Link from "next/link";

type NavLinksProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"li">;

async function NavLinks(props: NavLinksProps) {
  const { className, children, ...rest } = props;

  const res = await fetch(`${process.env.API_URL as string}/categories`);

  if (!res.ok) {
    console.log("Something went wrong!");
    return;
  }

  const data = (await res.json()) as category[];

  return (
    <>
      {data.map((item) => (
        <li key={item.id} className={`${className ? className : ""}`} {...rest}>
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
