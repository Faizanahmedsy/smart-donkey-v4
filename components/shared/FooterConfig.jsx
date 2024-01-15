import React from "react";
import { Footer } from ".";

const FooterConfig = () => {
  let adminPage = false;

  return !adminPage && <Footer />;
};

export default FooterConfig;
