import { cn } from "@/lib/utils";
import React from "react";

export default function TextT2({ className, children }) {
  return (
    <h2 className={cn("text-4xl font-bold my-12", className)}>{children}</h2>
  );
}
