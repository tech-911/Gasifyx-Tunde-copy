"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { footerDataType } from "../home/components/SubFooter";

export default function SubFooterWidget({ id, head, content }: footerDataType) {
  return (
    <div
      className={`p-[24px] w-full sm:min-w-[200px] xl:w-full sm:w-[200px] min-h-[200px] flex flex-col items-center gap-[10px] rounded-[10px] ${
        id === 0
          ? "bg-primary"
          : id === 1
          ? "bg-[#F44336]"
          : id === 2
          ? "bg-[#FFBF00]"
          : id === 3
          ? "bg-foreground"
          : "bg-primary"
      }`}
    >
      <Icon
        icon="icon-park-outline:hotel"
        className="text-[40px] text-background"
      />
      <p className="text-background text-[30px] font-[700]">{head}</p>
      <p className="text-background text-[14px] font-[700] text-center">
        {content}
      </p>
    </div>
  );
}
