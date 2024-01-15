import React from "react";
import { Navbar } from ".";
import { Footer } from ".";

const AppLayoutConfig = ({ children }) => {
  let adminPage = false;

  return (
    <div>
      {!adminPage && <Navbar />}
      {children}
      {!adminPage && <Footer />}
    </div>
  );
};

export default AppLayoutConfig;
