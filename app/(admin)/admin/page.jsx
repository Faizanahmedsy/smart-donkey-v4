import React from "react";
import { Sidebar } from "./components/sidebar";
import MusicPage from "./components/musicpage";

const Admin = () => {
  return (
    <div className="h-screen bg-slate-800">
      {/* <Sidebar className="w-64 bg-slate-900" />

      <h1>Foo</h1> */}

      <MusicPage />
    </div>
  );
};

export default Admin;
