import React, { useRef } from "react";
import { Carousel } from "flowbite-react";
import { useNavigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const searchRef = useRef();
  const navigate = useNavigate();
  return (
    <div>
      <div className="upNav">
        <div className="logoAndSearch flex justify-between m-5">
          <h1>LOGO</h1>
          <div className="form-control">
            <div className="input-group input-group-sm">
              <input
                ref={searchRef}
                type="text"
                placeholder="Search…"
                className="input input-bordered input-sm"
              />
              <button
                onClick={() =>
                  searchRef.current.value
                    ? navigate(`/search/${searchRef.current.value}`)
                    : navigate("/")
                }
                className="btn btn-square btn-sm"
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
              className="h-[750px] object-fill hover:brightness-95 aspect-[16/6]"
              src="https://cutewallpaper.org/21/demon-slayer-zenitsu-wallpaper/Hd-Demon-Slayer-Background-3840x1080-Elkgroveses.com.jpg"
              alt="..."
            />
            <img
              className="h-[700px] hover:brightness-95 aspect-[16/6]"
              src="https://wallpapercave.com/wp/wp4657480.jpg"
              alt="..."
            />
            <img
              className="h-[950px] hover:brightness-95 aspect-[16/6]"
              src="https://store-images.s-microsoft.com/image/apps.18464.63877934742645278.665d3378-1d8e-4341-a7b2-14afc3a69269.87a74448-9330-4f93-89e0-eb23be82251a?mode=scale&q=90&h=1080&w=1920"
              alt="..."
            />
            <img
              className="h-[700px] hover:brightness-95 aspect-[16/6]"
              src="https://images.saymedia-content.com/.image/t_share/MTc2MjQ4NTM5NjgzNDMyMzI3/15-anime-that-will-remind-you-of-ansatsu-kyoushitsu-assassination-classroom.jpg"
              alt="..."
            />
            <img
              className="h-[700px] hover:brightness-95 aspect-[16/6]"
              src="https://staticg.sportskeeda.com/editor/2022/10/d8581-16663316932144-1920.jpg"
              alt="..."
            />
          </Carousel>
        </div>
      </div>
      <div className="downNav"></div>
    </div>
  );
};

export default Navbar;
