import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cars from "../components/Cars";
import Home from "../components/Home";
import Layout from "../layout/Layout";
import NotFound404 from "../layout/NotFound404";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
        </Route>
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
