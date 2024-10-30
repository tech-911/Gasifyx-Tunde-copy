"use client";

import React from "react";
import { benefitDataType } from "../home/components/BenefitSection";
import "./benefitCard.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function BenefitCards({
  title,
  content1,
  content2,
  img,
  link,
}: benefitDataType) {
  const route = useRouter();
  const handleLinking = (link: string) => {
    route.push(link);
  };
  return (
    <div className="rounded-[40px] w-full 2md:w-[350px] lg:w-full h-[487px] flex flex-col items-center p-[30px] benefitCardShadow transition duration-300 hover:scale-105">
      <Image src={img} alt={title} priority className="mb-[24px]" />
      <p className="text-foreground text-[20px] font-[700] leading-[30px] mb-[24px]">
        {title}
      </p>
      <p className="text-foreground text-[14px] font-[400] leading-[21px] mb-[12px] text-center">
        {content1}
      </p>
      <div className="flex flex-col items-center w-full h-full justify-between gap-2">
        <p className="text-foreground text-[14px] font-[400] leading-[21px] text-center">
          {content2}
        </p>
        <Button
          variant="outline"
          className="min-h-[48px] w-full hover:bg-primary/70 hover:text-background rounded-full"
          onClick={() => handleLinking(link)}
        >
          Join Waitlist Now
        </Button>
      </div>
    </div>
  );
}
