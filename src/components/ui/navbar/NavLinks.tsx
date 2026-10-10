import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { getCategoryIndex } from "@/lib/categoryActions";
import toast from "react-hot-toast";

type NavLinksProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"li">;

async function NavLinks(props: NavLinksProps) {
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
