import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import LogoAndSearch from "../components/LogoAndSearch";
import Select from "../components/Select";
import TopYear from "../components/TopYear";

const Navbar = () => {
  const { id, idYear } = useParams();

  return (
    <div>
      <div className="upNav">
        <LogoAndSearch />
        <Carousel idYear={idYear} id={id} />
      </div>
      <div className="downNav flex items-center justify-center mx-auto gap-3 container mt-5">
        <Select id={id}/>
        <TopYear id={id}/>
      </div>
    </div>
  );
};

export default Navbar;
