import Image from "next/image";
import React from "react";

const UnderConstruction = () => {
  return (
    <div className="h-screen flex  items-center flex-col">
      <Image
        src="https://api.iconify.design/fluent-emoji/construction.svg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <div className="text-3xl font-bold">Page Under Construction</div>
    </div>
  );
};

export default UnderConstruction;
