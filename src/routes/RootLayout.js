import React from "react";
import Header from "../components/Header";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Header/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
