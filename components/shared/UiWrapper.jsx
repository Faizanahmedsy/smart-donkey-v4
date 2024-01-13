import { cn } from "@/lib/utils";
import React from "react";

const UiWrapper = ({ className, children }) => {
  return (
    <section
      className={cn(
        "mx-auto w-full max-w-screen-xl md:px-20  py-4 px-4 h-screen",
        className
      )}
    >
      {children}
    </section>
  );
};

export default UiWrapper;
