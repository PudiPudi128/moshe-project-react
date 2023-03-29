import React from "react";
import { Carousel } from "flowbite-react";

const Navbar = () => {
  return (
    <div >
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
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={5000}>
            <img
              className="sm:h-[400px] md:h-[500px] lg:h-[600px]"
              src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
