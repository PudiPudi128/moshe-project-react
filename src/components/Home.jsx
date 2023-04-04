import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import MovieList from "./MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchUrl, setSearchUrl] = useState("naruto");
  const { id, idYear } = useParams();
  const location = useLocation();

  const movieApi = async () => {
    const { data } = await axios.get(
      !idYear
        ? `http://www.omdbapi.com/?s=${searchUrl}&apikey=55a6d6bc`
        : `http://www.omdbapi.com/?s=${
            searchUrl ? searchUrl : naruto
          }&y=${idYear}&apikey=55a6d6bc`
    );
    console.log("data=", data.Search);
    setMovies(data.Search);
  };
  useEffect(() => {
    movieApi();
  }, [searchUrl]);

  useEffect(() => {
    movieApi();
  }, [idYear]);

  useEffect(() => {
    setSearchUrl(id ? id : "naruto");
  }, [location]);
  return (
    <div>
      <MovieList movies={movies} urlYear={idYear} urlName={id} />
    </div>
  );
};

export default Home;
