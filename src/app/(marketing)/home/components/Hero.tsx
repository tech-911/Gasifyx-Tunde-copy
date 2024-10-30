"use client";

import React from "react";
import Image from "next/image";
import hero from "@/assets/img/hero.png";
import SubNav from "../../_compnents/subNav";
import { Button } from "@/components/ui/button";
import logo from "@/assets/img/stay-logo.png";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navData } from "../../_compnents/nav";
import NavButton from "../../_compnents/navButton";
import SearchInputBox from "@/app/_components/searchInputBox";
import "./hero.css"

export default function Hero() {
  return (
    <main className="w-full xl:py-[50px] pt-[30px] lg:px-[150px] px-[32px] relative flex backgroundImage">
      {/* <Image
        src={hero}
        alt="Hero"
        priority
        className="absolute top-0 left-0 w-[20000px] lg:w-full h-full z-0"
      /> */}
      <div className="z-10 w-full">
        <div className="w-fit mb-[50px] md:mb-[89px] flex lg:hidden">
          <div className="grid grid-cols-2 gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="h-fit w-fit p-0">
                  <SubNav />
                </Button>
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader className="flex flex-row items-center gap-2">
                  <Image
                    src={logo}
                    alt="Stay logo"
                    priority
                    className="w-[60px] h-[60px]"
                  />
                  <SheetTitle className="text-[26px]">Stay</SheetTitle>
                </SheetHeader>
                <ScrollArea
                  thumbColor="bg-primary/30"
                  className="h-full w-full"
                >
                  <SheetDescription className="w-full flex flex-col items-start gap-2 mt-16 pr-5">
                    {navData?.map(({ id, name, link }) => {
                      return (
                        <NavButton key={id} id={id} link={link} name={name} />
                      );
                    })}
                  </SheetDescription>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <p className="text-background text-[25px] md:text-[32px] 2lg:text-[36px] font-[700] leading-[30px] md:leading-[48px] mb-[9px]">
          Agents • Savings • Loans
        </p>
        <p className="text-background text-[25px] md:text-[32px] 2lg:text-[36px] font-[700] leading-[30px] md:leading-[48px] pb-[30px] md:pb-[42px]">
          Carbon Credits • Invest
        </p>
        <div className="w-full mb-[50px] md:mb-[81px] h-[50px] sm:h-[66px]">
          <SearchInputBox />
        </div>
      </div>
    </main>
  );
}
