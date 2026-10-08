import React from "react";
import NavLogo from "./NavLogo";
import MobileMenu from "./MobileMenu";
import NavUser from "./NavUser";

function Navbar() {
  return (
    <nav className="bg-base-100 border-b border-gray-100">
      <div className="navbar container mx-auto ">
        <MobileMenu />
        <NavLogo />
        <NavUser />
      </div>
    </nav>
  );
}

export default Navbar;
