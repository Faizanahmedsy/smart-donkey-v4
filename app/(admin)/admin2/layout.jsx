import React from "react";
import SideBar from "@/components/shared/SideBar";

const Admin2Layout = ({ children }) => {
  return (
    <div className="bg-red-400 h-screen pt-10 mx-auto">
      <div className="flex gap-x-7 h-full">
        <div className="w-64 shrink-0 hidden md:block bg-blue-600 h-full">
          <SideBar />
        </div>

        {children}
      </div>
    </div>
  );
};

export default Admin2Layout;
