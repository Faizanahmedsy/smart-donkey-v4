import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ProductButtons from "./ProductButtons.jsx";

async function Products() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return products;
}

export default async function Store() {
  const data = await Products();

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {data.map((product) => (
          <Card
            className="w-full h-full  flex flex-col justify-between"
            key={product.id}
          >
            <CardHeader>
              <CardTitle className={"text-xl"}>{product.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                />
                <CardDescription className="h-[100px] overflow-hidden p-4">
                  {product.description}
                </CardDescription>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <ProductButtons />
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
