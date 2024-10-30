"use client";

import React from "react";
import Image from "next/image";
import logo from "@/assets/img/Logo.png";
import NavButton from "./navButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const navData: NAVTYPES.navDataType[] = [
  {
    id: 0,
    link: "/about",
    name: "About Us",
  },
  {
    id: 1,
    link: "/features",
    name: "Features",
  },
  {
    id: 2,
    link: "/products",
    name: "Products",
  },
  {
    id: 3,
    link: "/resources",
    name: "Resources",
  },
  {
    id: 4,
    link: "/community",
    name: "Join Community",
  },
];
export default function Navbar() {
  return (
    <div className="rounded-[16px] flex px-[32px] py-[30px] w-full items-center justify-between gap-2 border-[2px] border-[#E4E7EC] bg-[#FAFCF7B2] backdrop-blur-sm">
      <Image src={logo} alt="Stay logo" priority className="" />

      <div className="flex flex-row items-center gap-1 2lg:gap-3">
        {navData?.map(({ id, link, name }) => {
          return <NavButton key={id} id={id} link={link} name={name} />;
        })}
      </div>
      <div className="flex flex-row items-center gap-4">
        <Button
          asChild
          variant={"outline"}
          className={`bg-transparent text-primary hover:bg-secondary font-[600] transition-colors duration-500 ease-in-out`}
        >
          <Link href="">Login</Link>
        </Button>
        <Button
          asChild
          className={`text-secondary font-[600] hover:text-primary hover:bg-secondary transition-colors duration-500 ease-in-out`}
        >
          <Link href="">Signup</Link>
        </Button>
      </div>
    </div>
  );
}
