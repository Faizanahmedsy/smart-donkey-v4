import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

const WhyUs = () => {
  const data = [
    {
      title: "Skills relevant to the life",
      des: "We teach you things that will be actually useful in your life, instead of forcing you to remember dates we will teach you what lessions we can learn from the history.",
    },
    {
      des: "Instead of teaching you commerce theory, we will teach you how to do business, how to make money, how to invest, how to save, how to spend, how to manage your money, how to grow your money, how to protect your money, how to make your money work for you, how to make your money make more money for you, how to make your money make more money for you while you sleep,",
    },
    {
      title: "",
      des: "We will teach how to search",
    },
    {
      title: "",
      des: "We will teach how to critically think",
    },
    {
      title: "",
      des: "We will teach how to communicate",
    },
    {
      title: "",
      des: "We will teach how to be confident",
    },
  ];

  const subjects = [
    {
      title: "Personal Finance",
    },
    {
      title: "Enterprenuership",
    },
    {
      title: "Economics",
    },
    {
      title: "History",
    },
  ];

  return (
    <div className="p-14">
      <div className="flex flex-col items-center  w-full gap-4">
        <h2 className={cn("text-4xl font-bold")}>Why smart donkey?</h2>

        <div className="grid grid-cols-3 gap-2">
          {}
          <Card className="flex flex-col items-center justify-center p-10 rounded-3xl ">
            <h3 className="text-2xl font-bold pb-3">We are the best</h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quia, fugiat voluptate, quod quas doloribus voluptas
              quos quibusdam quae molestiae? Quisquam, quia, fugiat voluptate,
              quod quas doloribus voluptas quos quibusdam quae molestiae?
            </p>
          </Card>
          <Card className="flex flex-col items-center justify-center p-10 rounded-3xl ">
            <h3 className="text-2xl font-bold pb-3">We are the best</h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quia, fugiat voluptate, quod quas doloribus voluptas
              quos quibusdam quae molestiae? Quisquam, quia, fugiat voluptate,
              quod quas doloribus voluptas quos quibusdam quae molestiae?
            </p>
          </Card>
          <Card className="flex flex-col items-center justify-center p-10 rounded-3xl ">
            <h3 className="text-2xl font-bold pb-3">We are the best</h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quia, fugiat voluptate, quod quas doloribus voluptas
              quos quibusdam quae molestiae? Quisquam, quia, fugiat voluptate,
              quod quas doloribus voluptas quos quibusdam quae molestiae?
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
