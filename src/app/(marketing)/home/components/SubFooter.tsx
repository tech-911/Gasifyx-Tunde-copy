"use client";

import React from "react";
import Image from "next/image";
import spotLightHouse from "@/assets/img/homepage-spot-rent.png";
import SubFooterWidget from "../../_compnents/subFooterWidget";
import { Icon } from "@iconify/react";
import logo from "@/assets/img/stay-logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { image } from "framer-motion/client";

export type footerDataType = {
  id?: number;
  head: string;
  content: string;
};
export type socialDataType = {
  id?: number;
  icon: string;
  link: string;
};

export const footerData: footerDataType[] = [
  {
    id: 0,
    head: "12K",
    content: "Rental Properties",
  },
  {
    id: 1,
    head: "10K",
    content: "Hotels",
  },
  {
    id: 2,
    head: "6K",
    content: "Commercial Properties",
  },
  {
    id: 3,
    head: "23K",
    content: "Event Centres",
  },
];

export const socialData: socialDataType[] = [
  {
    id: 0,
    icon: "hugeicons:new-twitter",
    link: "https://x.com/RealstayHandT",
  },
  {
    id: 1,
    icon: "logos:facebook",
    link: "https://www.facebook.com/profile.php?id=61565543437788&mibextid=ZbWKwL",
  },
  {
    id: 2,
    icon: "skill-icons:instagram",
    link: "https://www.instagram.com/stayhomesandtechnologies/tagged/?hl=en",
  },
];
export default function SubFooter() {
  return (
    <section className="w-full bg-background px-[32px] lg:px-[150px] py-[50px] lg:py-[70px] flex flex-col gap-[100px]">
      <div className="w-full flex flex-row items-start gap-[20px] xl:flex-nowrap flex-wrap">
        {footerData?.map(({ id, head, content }) => {
          return (
            <SubFooterWidget key={id} id={id} head={head} content={content} />
          );
        })}
      </div>
      <div className="flex flex-col-reverse md:flex-row md:items-center items-start justify-between gap-10 md:gap-2 w-full">
        <div className="flex flex-col items-start gap-[20px]">
          <p className="text-foreground text-[26px] font-[700] text-center">
            Follow Us on:
          </p>
          <div className="flex flex-row items-center md:gap-[20px] gap-[40px]">
            {socialData?.map(({ id, icon, link }) => {
              return (
                <Button
                  asChild
                  key={id}
                  className="bg-transparent hover:bg-transparent w-fit p-0"
                >
                  <Link href={link} target="_blank">
                    <Icon icon={icon} className="text-[40px] text-foreground" />
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-start md:gap-[25px] gap-[10px]">
          <div className="flex flex-row items-center gap-[24px]">
            <Icon
              icon="icon-park-outline:hotel"
              className="text-[40px] text-foreground"
            />
            <p className="text-foreground text-[20px] font-[500] text-center">
              Naija Hotels
            </p>
          </div>
          <div className="flex flex-row items-center gap-[24px]">
            <Icon
              icon="ri:home-8-line"
              className="text-[40px] text-destructive"
            />
            <p className="text-destructive text-[20px] font-[500] text-center">
              Naija Homes
            </p>
          </div>
          <div className="flex flex-row items-center gap-[24px]">
            <Image
              src={logo}
              alt="Stay logo"
              priority
              className="w-[40px] h-[40px]"
            />
            <p className="text-primary text-[20px] font-[500] text-center">
              Stay Homes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
