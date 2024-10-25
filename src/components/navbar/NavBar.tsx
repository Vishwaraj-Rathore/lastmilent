import React from "react";
import LogoButton from "./LogoButton";
import LinkButton from "./LinkButton";
import HamBurger from "./HamBurger";

const NavBar = () => {
  return (
    <>
      <nav className="p-5 flex bg-white justify-between items-center">
        <LogoButton />
        <ul>
          <li className="font-medium hover:text-blue-700">
            <LinkButton title={"Home"} location={"/"} />
          </li>
          <li className="font-medium hover:text-blue-700">
            <LinkButton title={"SunBless"} location={"/sunbless"} />
          </li>
          <li className="font-medium hover:text-blue-700">
            <LinkButton title={"Contact Us"} location={"/contact"} />
          </li>
        </ul>
        <div className="md:hidden">
          <HamBurger />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
