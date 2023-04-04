import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import LogoAndSearch from "../components/LogoAndSearch";

const Layout = () => {
  const { idMovie } = useParams();
  return (
    <div>
      {idMovie ? <LogoAndSearch /> : <Navbar />}
      <Outlet />
    </div>
  );
};

export default Layout;
