"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const LogoButton = () => {
  return (
    <>
      <Link href={"/"}>
        <Image
          src={"/NavLogo.png"}
          alt="Company Logo"
          width={130}
          height={70}
        />
      </Link>
    </>
  );
};

export default LogoButton;
