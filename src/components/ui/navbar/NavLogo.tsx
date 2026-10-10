import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { getCurrentDateBn } from "@/lib/utils";

type NavLogoProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function NavLogo(props: NavLogoProps) {
  const { className, children, ...rest } = props;

  return (
    <div className={`flex-1 ${className ? className : ""}`} {...rest}>
      <Link href="/" className="btn btn-ghost text-xl py-6 px-2">
        <div className="flex gap-2">
          <span className="py-1 px-2 md:py-3 md:px-4 rounded-lg bg-pr text-pr-content text-lg md:text-xl">
            🛒
          </span>
          <p className="flex flex-col text-left">
            <span className="text-base sm:text-lg md:text-2xl font-bold">
              বাজার দর
            </span>
            <span className="text-[8px] sm:text-xs md:text-sm font-medium text-gray-700">
              {getCurrentDateBn()}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default NavLogo;
