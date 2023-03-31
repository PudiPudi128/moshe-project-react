import React from "react";
import { useParams } from "react-router-dom";

const Info = ({movies}) => {
    const { idMovie } = useParams();
    console.log("datafrominfo",movies);
    // const theMovie = data.find((val) => val.imdbID == idMovie);
  return <div>info</div>;
};

export default Info;
