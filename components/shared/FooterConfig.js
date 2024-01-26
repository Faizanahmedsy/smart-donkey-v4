"use client";

import { Footer } from ".";
import { usePathname } from "next/navigation";

const FooterConfig = () => {
  let pathName = usePathname();

  let adminPage = false;

  if (pathName === "/admin") {
    adminPage = true;
  } else {
    adminPage = false;
  }

  return !adminPage && <Footer />;
};

export default FooterConfig;
