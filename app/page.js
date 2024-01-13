import { Hero, WhyUs } from "@/components/modules";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { bebasNeue, robotoCondensed } from "@/utils/fonts";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
    </>
  );
}
