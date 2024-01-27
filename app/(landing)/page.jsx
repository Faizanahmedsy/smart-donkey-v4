import { BentoGrid, Hero, WhyUs } from "@/components/modules";
import { BackgroundBeamsDemo } from "@/components/shared/BackgroundBeams";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <BentoGrid />
    </>
  );
}
