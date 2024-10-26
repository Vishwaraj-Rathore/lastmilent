"use client";

import React from "react";
import Link from "next/link";

const LinkButton = () => {
  return (
    <>
      <ul className="hidden md:flex gap-12 pr-7">
        <li className="font-medium hover:text-blue-700">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="font-medium hover:text-blue-700">
          <Link href={"/sunbless"}>SunBless</Link>
        </li>
        <li className="font-medium hover:text-blue-700">
          <Link href={"/fairlane"}>Fair Lane</Link>
        </li>
        <li className="font-medium hover:text-blue-700">
          <Link href={"/justcorseca"}>Just Corseca</Link>
        </li>
        <li className="font-medium hover:text-blue-700">
          <Link href={"/contact"}>Contact Us</Link>
        </li>
      </ul>
    </>
  );
};

export default LinkButton;
