import React from "react";
import { BsPlayBtnFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const MovieList = ({ movies }) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-4 gap-4 justify-items-center mx-auto my-0 container mt-5">
      {movies ? (
        movies.map((movie, i) => (
          <div key={i} className="bg-gray-500 relative">
            <button className="absolute bg-black h-full w-full opacity-0 hover:opacity-90 duration-500 flex justify-center items-center">
              <BsPlayBtnFill className=" text-3xl" />
            </button>
            <img src={movie.Poster} alt="" className="w-full aspect-[9/14]" />
          </div>
        ))
      ) : (
        <h1 className="text-5xl">No results...</h1>
      )}
    </div>
  );
};

export default MovieList;
