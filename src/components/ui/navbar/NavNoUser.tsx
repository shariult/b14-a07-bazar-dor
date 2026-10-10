import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";

type NavNoUserProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function NavNoUser(props: NavNoUserProps) {
  const { className, children, ...rest } = props;

  return (
    <div
      className={`flex flex-wrap sm:flex-nowrap gap-1 ${className ? className : ""}`}
      {...rest}
    >
      <Link href="/signin" className="btn btn-ghost btn-sm md:btn-md">
        সাইন ইন
      </Link>
      <Link
        href="/signup"
        className="btn btn-sm md:btn-md bg-pr text-pr-content hover:bg-pr-hover"
      >
        সাইন আপ
      </Link>
    </div>
  );
}

export default NavNoUser;
