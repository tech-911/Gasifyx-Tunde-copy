"use client";

import Image from "next/image";
import Logo from "@/assets/img/waitlistLogo.png";
import { Button } from "@/components/ui/button";

export default function WaitList() {
  return (
    <main className="px-10 1md:px-20 pt-7 pb-40 min-h-screen flex flex-col relative WaitListBackgroundImage">
      <Image src={Logo} alt="gasVision" className="mb-10 sm:mb-44" />
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center sm:gap-3">
          <h1 className="text-secondary text-center font-[900] 1md:text-[72px] sm:text-[48px] text-[30px] 1md:leading-[80px] sm:leading-[50px] leading-[38px]">
            Hey there, we’re building
          </h1>
          <h2 className="w-[100%] h-fit flex justify-center text-secondary text-center font-[900] 1md:text-[72px] sm:text-[48px] text-[30px] 1md:leading-[80px] sm:leading-[50px] leading-[38px]">
            something&nbsp;
            <span className="TextVEffect">
              <p className="text-slide">special</p>
              <p className="text-slide text-[#2E90FA]">unique</p>
              <p className="text-slide text-background">exclusive</p>
            </span>
          </h2>

          <h1 className="text-secondary text-center font-[900] 1md:text-[72px] sm:text-[48px] text-[30px] 1md:leading-[80px] sm:leading-[50px] leading-[38px]">
            for you!
          </h1>
        </div>
        <p className="text-background 1md:text-[20px] text-[18px] text-center font-[600] max-w-[1055px]">
          Join our waitlist to access a bundle of solution that will make
          refilling, repairing, and replacing your gas cylinder easier than
          ever! We're also working hard to reduce the number of deaths caused by
          gas explosions. If this sounds interesting to you, join our waitlist
          to contribute to the cause.
        </p>
        <Button
          className={`text-secondary font-[600] py-4 px-7 hover:text-primary hover:bg-secondary transition-colors duration-500 ease-in-out`}
        >
          Join the waitlist &nbsp;&nbsp; &rarr;
        </Button>
      </div>
    </main>
  );
}
