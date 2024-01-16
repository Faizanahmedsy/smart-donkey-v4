import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { bebasNeue } from "@/lib/utils/fonts";
import { UiWrapper } from "../shared";

const WhyUs = () => {
  return (
    <div className="p-14">
      <div className="flex flex-col items-center  w-full gap-4">
        <h2 className={cn("text-4xl font-bold")}>Why smart donkey?</h2>

        <div className="grid grid-cols-3 gap-2">
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
