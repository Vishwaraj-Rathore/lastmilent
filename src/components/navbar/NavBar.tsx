import React from "react";
import LogoButton from "./LogoButton";
import LinkButton from "./LinkButton";
import HamBurger from "./HamBurger";

const NavBar = () => {
  return (
    <>
      <nav className="p-5 flex bg-white justify-between items-center">
        <div className="pl-2">
          <LogoButton />
        </div>
        <LinkButton />
        <div className="md:hidden">
          <HamBurger />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
