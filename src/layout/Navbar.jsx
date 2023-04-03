import React, { useEffect, useRef, useState } from "react";
import { useNavigate, NavLink, useParams, Link } from "react-router-dom";
import Carousel from "../components/Carousel";
// import Logo from "../assets/Logo.png";

const Navbar = () => {
  const searchRef = useRef();
  const selcetRef = useRef();
  const { id, idYear } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <div className="upNav">
        <div className="logoAndSearch flex justify-between mx-auto w-full m-5 pr-3 absolute z-50">
          <button
            className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            onClick={() => navigate("/")}
          >
            <h1 className=" font-ewert text-6xl ps-3 text-red-600">Movies</h1>
          </button>
          <button className="btn xl:w-[370px] md:w-[300px] sm:w-[250px] xs:w-[200px] max-sm:w-[100px] btn-warning absolute top-[532px]">
            Click on the image for more infomation
          </button>
          <div className="form-control">
            <div className="input-group input-group-sm">
              <input
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    searchRef.current.value
                      ? navigate(`/search/${searchRef.current.value}`)
                      : navigate("/");
                    searchRef.current.value = "";
                  }
                }}
                ref={searchRef}
                type="text"
                placeholder="Search…"
                className="input input-bordered input-md input-error text-error placeholder:text-error"
              />
              <button
                onClick={() => {
                  searchRef.current.value
                    ? navigate(`/search/${searchRef.current.value}`)
                    : navigate("/"),
                    (searchRef.current.value = "");
                }}
                className="btn btn-square btn-md btn-error"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Carousel idYear={idYear} id={id}/>
      </div>
      <div className="downNav flex flex-col items-center mx-auto gap-3 container mt-5">
        <div className="flex gap-5">
          <h1 className=" text-2xl text-white">Top Years</h1>
          <button
            onClick={(e) => navigate(`/search/${id ? id : "naruto"}/year/1950`)}
          >
            1950
          </button>
          <button
            onClick={(e) => navigate(`/search/${id ? id : "naruto"}/year/1960`)}
          >
            1960
          </button>
          <button
            onClick={(e) => navigate(`/search/${id ? id : "naruto"}/year/1970`)}
          >
            1970
          </button>
          <button
            onClick={(e) => navigate(`/search/${id ? id : "naruto"}/year/1980`)}
          >
            1980
          </button>
          <button
            onClick={(e) => navigate(`/search/${id ? id : "naruto"}/year/1990`)}
          >
            1990
          </button>
          <button
            onClick={(e) => navigate(`/search/${id ? id : "naruto"}/year/2000`)}
          >
            2000
          </button>
          <button
            onClick={(e) => navigate(`/search/${id ? id : "naruto"}/year/2010`)}
          >
            2010
          </button>
          <button
            onClick={(e) => navigate(`/search/${id ? id : "naruto"}/year/2020`)}
          >
            2020
          </button>
        </div>
        <select
          ref={selcetRef}
          onChange={() => {
            navigate(
              `/search/${id ? id : "naruto"}/year/${selcetRef.current.value}`
            );
          }}
          className="border border-black p-2 text-black"
        >
          <option disabled defaultValue className=" text-zinc-600" value="">
            Select a year
          </option>
          {Array.from({ length: 74 }, (_, i) => (
            <option className=" text-black" key={i} value={2023 - i}>
              {2023 - i}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Navbar;
