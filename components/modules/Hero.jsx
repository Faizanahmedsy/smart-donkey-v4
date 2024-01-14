import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { poppins } from "@/utils/fonts";

const Hero = () => {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-[670px] text-center p-40"
      // style={{
      //   background: "linear-gradient(190deg, black, #000212, #092230)",
      // }}
    >
      <h1 className={cn("text-6xl font-bold py-7", poppins.className)}>
        Become as <span className="text-[#99ddfd] ">smart</span> as a fox and as
        diligent as a <span className="text-[#99ddfd]">donkey</span>
      </h1>

      <p className={cn("text-2xl font-semibold text-zinc-500 px-40")}>
        Smart Donkey is a goldmine of resources collected from all over the
        internet to help you learn things that actually matters in life
        {/* Learn things that actually matters in life, and makes you a good and
        successful person. */}
      </p>

      <div className="flex gap-4 m-4">
        <Button variant="outline">Explore</Button>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Hero;
