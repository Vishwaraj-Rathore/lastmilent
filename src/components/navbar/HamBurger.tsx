"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const HamBurger = () => {
  return (
    <>
      <Image
        src={"/bars-solid.svg"}
        alt="Hamburger icon"
        width={20}
        height={20}
      />
    </>
  );
};

export default HamBurger;
