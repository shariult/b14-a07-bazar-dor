import React, { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import Link from "next/link";

type NavUserProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function NavUser(props: NavUserProps) {
  const { className, children, ...rest } = props;

  return (
    <div className={`flex gap-2 ${className ? className : ""}`} {...rest}>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost avatar">
          <div className="w-10 rounded-full">
            <Image
              alt="Tailwind CSS Navbar component"
              src="/demo-avatar.webp"
              width="40"
              height="40"
            />
          </div>
          <p className="hidden md:block text-base">John Doe</p>
        </div>
        <ul
          tabIndex={-1}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li className="bg-gray-100 mb-2 md:mb-4 py-2 md:py-3 md:px-2 rounded-lg">
            <span className="text-xl hover:bg-gray-100 hover:cursor-auto active:text-gray-900">
              John Doe
            </span>
            <span className="text-right hover:bg-gray-100 hover:cursor-auto active:text-gray-900">
              john@doe.com
            </span>
          </li>
          <li>
            <Link href="#" className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
            <Link href="#">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavUser;
