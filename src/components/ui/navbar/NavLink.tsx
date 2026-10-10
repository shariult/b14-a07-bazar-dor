"use client";

import { Category } from "@/types";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
  categoryData: Category;
  className?: string;
  children?: React.ReactNode;
} & LinkProps;

function NavLink(props: NavLinkProps) {
  const { categoryData, href, className, children, ...rest } = props;

  const url = usePathname();
  const isActive = url === `/category/${categoryData.slug}`;

  return (
    <Link
      href={href}
      className={`flex gap-2 py-2 px-4 md:justify-center  md:rounded-lg ${isActive ? "bg-gray-200" : "hover:bg-gray-100"} ${className ? className : ""}`}
      {...rest}
    >
      <span>{categoryData.icon}</span>
      <span>{categoryData.nameBn}</span>
    </Link>
  );
}

export default NavLink;
