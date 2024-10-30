"use client";

import React from "react";
import loan from "@/assets/img/loan.png";
import saving from "@/assets/img/savings.png";
import agent from "@/assets/img/agents.png";
import { StaticImageData } from "next/image";
import BenefitCards from "../../_compnents/benefitCards";

export type benefitDataType = {
  id?: number;
  title: string;
  content1: string;
  content2: string;
  link: string;
  img: StaticImageData;
};

export const benefitsData: benefitDataType[] = [
  {
    id: 0,
    title: "STAY Loan",
    content1:
      "Don't lose your home, Access flexible loan anyday and anytime to cover your house rent payments",
    content2: "Repay within 1-5 months with just 15% interest.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdRgqAZBFe98g0LJsxWY2tm2EGlH2Te192jpighaevzyId2Sg/viewform?usp=sf_link",
    img: loan,
  },
  {
    id: 1,
    title: "STAY Savings",
    content1:
      "Unlock massive benefit and return on every Kobo you save towards rent with STAY",
    content2: "Earn 10%-15% on your house rent  savings",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdRgqAZBFe98g0LJsxWY2tm2EGlH2Te192jpighaevzyId2Sg/viewform?usp=sf_link",
    img: saving,
  },
  {
    id: 2,
    title: "STAY Agent",
    content1:
      "Become a STAY Agent, get assigned exclusive territories to list and manage properties.",
    content2: "Earn endless daily Commissions",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfLLeH9A7hAnYsIS1o6zOCm0Ji9Vrt18b3xrgaM5lrRjLlbjg/viewform?usp=sf_link",
    img: agent,
  },
];
export default function Benefit() {
  return (
    <section className="w-full bg-background px-[32px] lg:px-[83px] py-[50px] lg:py-[100px] flex flex-col items-start gap-[50px]">
      <p className="text-foreground sm:text-[30px] text-[20px] font-[700] sm:leading-[40px] leading-[20px]">
        Massive benefits just for you
      </p>
      <div className="flex flex-row items-start w-full lg:flex-nowrap flex-wrap gap-[24px]">
        {benefitsData?.map(({ id, title, content1, content2, img, link }) => {
          return (
            <BenefitCards
              key={id}
              title={title}
              content1={content1}
              content2={content2}
              img={img}
              link={link}
            />
          );
        })}
      </div>
    </section>
  );
}
