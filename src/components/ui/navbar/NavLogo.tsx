import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
          <span className="p-4 rounded-lg bg-pr">
            <Image
              src="/logo-icon.png"
              alt="logo of bazar dor. a cart with a green background"
              width={12}
              height={12}
              className="w-full"
            />
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
