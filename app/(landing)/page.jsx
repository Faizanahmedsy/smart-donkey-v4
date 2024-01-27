import { BentoGrid, Hero, WhyUs } from "@/components/modules";
import { Testimonial } from "@/components/modules/Testimonal";
import { BackgroundBeamsDemo } from "@/components/shared/BackgroundBeams";
import { InfiniteMovingCards } from "@/components/shared/InfiniteMovingCards";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <BentoGrid />
      <Testimonial />
    </>
  );
}
