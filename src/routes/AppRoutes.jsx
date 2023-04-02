import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Layout from "../layout/Layout";
import NotFound404 from "../layout/NotFound404";
import Info from "../components/Info";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/search/:id" element={<Home />} />
          <Route path="/search/:id/year/:idYear" element={<Home />} /> */}
        </Route>
        {/* <Route path="/search/:id/year/:idYear/id/:idMovie" element={<Info />} />
        <Route path="/search/:id/id/:idMovie" element={<Info />} />
        <Route path="*" element={<NotFound404 />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
