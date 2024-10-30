"use client";

import React from "react";
import Image from "next/image";
import spotLightHouse from "@/assets/img/homepage-spot-rent.png";

export default function AboutSection() {
  return (
    <section className="border-y border-y-foreground mx-[32px] lg:mx-[150px] py-[50px] lg:py-[100px] flex flex-col items-center">
      <p className="text-foreground sm:text-[30px] text-[20px] font-[700] sm:leading-[40px] leading-[20px] mb-[20px]">
        About STAY
      </p>
      <p className="text-foreground text-[14px] font-[400] leading-[21px] mb-[40px] text-center">
        Stay is your companion, your personal house agent, and the tool you can
        use to conveniently search, rent, mortgage, outrightly purchase, book
        and invest in real estate properties across Africa. Stay provides you
        with every necessary information that can help you make informed housing
        decision
      </p>
      <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-[10px]">
        <p className="text-foreground text-center sm:text-start text-[16px] font-[600] w-[183px]">
          Be your own house Agent with STAY
        </p>
        <Image
          src={spotLightHouse}
          alt={"spotLightHouse"}
          priority
          className=""
        />
      </div>
    </section>
  );
}
