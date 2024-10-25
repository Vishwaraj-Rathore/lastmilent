"use client";

import React from "react";
import Link from "next/link";

const LinkButton = (props: any) => {
  return (
    <>
      <Link href={props.location}>{props.title}</Link>
    </>
  );
};

export default LinkButton;
