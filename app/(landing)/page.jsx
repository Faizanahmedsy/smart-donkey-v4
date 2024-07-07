import { BentoGrid, Hero, WhyUs } from "@/components/modules";
import Subjects from "@/components/modules/Subjects";
import { Testimonial } from "@/components/modules/Testimonal";

export default function Home() {
  return (
    <>
      <Hero />
      <Subjects />
      <WhyUs />
      <BentoGrid />
      <Testimonial />
    </>
  );
}
