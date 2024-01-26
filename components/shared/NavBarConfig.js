"use client";

import { Navbar } from ".";
import { usePathname } from "next/navigation";

const NavBarConfig = () => {
  let pathName = usePathname();

  let adminPage = false;

  if (pathName === "/admin") {
    adminPage = true;
  } else {
    adminPage = false;
  }

  return !adminPage && <Navbar />;
};

export default NavBarConfig;
