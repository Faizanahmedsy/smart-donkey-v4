"use client";

import { usePathname, useRouter } from "next/navigation";
import { Navbar } from ".";

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
