import React, { ComponentPropsWithoutRef } from "react";
import NavLinks from "./NavCategories";

type MobileMenuProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function MobileMenu(props: MobileMenuProps) {
  const { className, children, ...rest } = props;

  return (
    <div className={`dropdown ${className ? className : ""}`} {...rest}>
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg
          aria-label="Menu"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />{" "}
        </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        <NavLinks />
      </ul>
    </div>
  );
}

export default MobileMenu;
