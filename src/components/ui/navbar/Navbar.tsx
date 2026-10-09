import React, { ComponentPropsWithoutRef, Suspense } from "react";
import NavLogo from "./NavLogo";
import MobileMenu from "./MobileMenu";
import NavUser from "./NavUser";
import NavLinks from "./NavLinks";
import NavLinksSk from "./NavLinksSk";

type NavbarProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"nav">;

function Navbar(props: NavbarProps) {
  const { className, children, ...rest } = props;

  return (
    <nav
      className={`bg-base-100 border-b border-gray-100 sticky top-0 z-10 ${className ? className : ""}`}
      {...rest}
    >
      <div className="navbar container mx-auto">
        <Suspense>
          <MobileMenu />
        </Suspense>

        <NavLogo />
        <NavUser />
      </div>

      <div className="hidden md:block border-t border-gray-100">
        <ul className="container mx-auto flex">
          <Suspense fallback={<NavLinksSk />}>
            <NavLinks />
          </Suspense>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
