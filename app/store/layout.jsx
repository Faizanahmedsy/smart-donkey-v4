import { UiWrapper } from "@/components/shared";
import React from "react";

const ProductListLayout = ({ children }) => {
  return (
    <UiWrapper>
      <h1 className="text-2xl font-bold">Product List</h1>
      {children}
    </UiWrapper>
  );
};

export default ProductListLayout;
