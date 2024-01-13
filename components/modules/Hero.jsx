import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { bebasNeue, robotoCondensed } from "@/utils/fonts";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-6">
      <h1
        className={cn(
          "text-8xl font-bold flex text-zinc-500",
          bebasNeue.className
        )}
      >
        The matrix ends here
        {/* <span className="flex justify-center items-center">
          <Image
            src="https://api.iconify.design/fluent-emoji/laptop.svg"
            height={50}
            width={50}
            alt="laptop"
          />
        </span> */}
      </h1>

      <p
        className={cn(
          "text-2xl font-semibold text-zinc-500",
          robotoCondensed.className
        )}
      >
        Learn things that actually matters in life, and make you a good and
        successful person.
      </p>

      <div className="flex gap-4">
        <Button variant="outline">Learn More</Button>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Hero;
