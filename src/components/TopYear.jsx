import React from "react";
import { NavLink } from "react-router-dom";

const TopYear = ({id}) => {
  return (
    <div className="flex gap-5">
      <h1 className="me-2 text-white text-xl">Top Years:</h1>
      {Array.from({ length: 8 }, (_, i) => (
        <NavLink
          className="me-2 hover:text-error pt-1"
          key={i}
          to={`/search/${id ? id : "naruto"}/year/${1950 + i * 10}`}
        >
          {1950 + i * 10}
        </NavLink>
      ))}
    </div>
  );
};

export default TopYear;
