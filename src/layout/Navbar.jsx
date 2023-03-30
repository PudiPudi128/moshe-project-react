import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "flowbite-react";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  let end = 1950;
  const searchRef = useRef();
  const selcetRef = useRef();
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <div className="upNav">
        <div className="logoAndSearch flex justify-between mx-auto w-full m-5 pr-3 absolute z-50">
          <button
            className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            onClick={() => navigate("/")}
          >
            <img className="w-60 " src={Logo} alt="Logo" />
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
        {/* h-56 sm:h-64 xl:h-80 2xl:h-96  */}
        <div className="h-[600px] w-full aspect-[16/6]">
          <Carousel slideInterval={5000}>
            <img
              className="h-[750px] object-fill aspect-[16/6]"
              src="https://cutewallpaper.org/21/demon-slayer-zenitsu-wallpaper/Hd-Demon-Slayer-Background-3840x1080-Elkgroveses.com.jpg"
              alt="..."
            />
            <img
              className="h-[700px] aspect-[16/6]"
              src="https://wallpapercave.com/wp/wp4657480.jpg"
              alt="..."
            />
            <img
              className="h-[950px] aspect-[16/6]"
              src="https://store-images.s-microsoft.com/image/apps.18464.63877934742645278.665d3378-1d8e-4341-a7b2-14afc3a69269.87a74448-9330-4f93-89e0-eb23be82251a?mode=scale&q=90&h=1080&w=1920"
              alt="..."
            />
            <img
              className="h-[700px] aspect-[16/6]"
              src="https://images.saymedia-content.com/.image/t_share/MTc2MjQ4NTM5NjgzNDMyMzI3/15-anime-that-will-remind-you-of-ansatsu-kyoushitsu-assassination-classroom.jpg"
              alt="..."
            />
            <img
              className="h-[700px] aspect-[16/6]"
              src="https://staticg.sportskeeda.com/editor/2022/10/d8581-16663316932144-1920.jpg"
              alt="..."
            />
          </Carousel>
        </div>
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
          <option disabled selected className=" text-zinc-600" value="">
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
