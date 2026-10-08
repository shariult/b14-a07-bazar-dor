import React from "react";
import NavLogo from "./NavLogo";
import MobileMenu from "./MobileMenu";
import NavUser from "./NavUser";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <nav className="bg-base-100 border-b border-gray-100">
      <div className="navbar container mx-auto ">
        <MobileMenu />
        <NavLogo />
        <NavUser />
      </div>

      <div className="hidden md:block border-t border-gray-100">
        <ul className="container mx-auto flex">
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
