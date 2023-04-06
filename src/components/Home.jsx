import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import MovieList from "./MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const { id, idYear } = useParams();
  const location = useLocation();

  const movieApi = async () => {
    const { data } = await axios.get(
      !idYear
        ? `https://www.omdbapi.com/?s=${id ? id : "naruto"}&apikey=55a6d6bc`
        : `https://www.omdbapi.com/?s=${
            id ? id : "naruto"
          }&y=${idYear}&apikey=55a6d6bc`
    );
    console.log("data=", data.Search);
    setMovies(data.Search);
  };


  useEffect(() => {
    movieApi();
  }, [location]);
  return (
    <div>
      <MovieList movies={movies} idYear={idYear} id={id} />
    </div>
  );
};

export default Home;
