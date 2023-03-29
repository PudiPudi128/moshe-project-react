import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);
  // const [searchUrl, setSearchUrl] = useState("bank");

  const movieApi = async () => {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?s=bank&apikey=55a6d6bc`
    );
    console.log("data=", data.Search);
    setMovies(data.Search);
  };
  useEffect(() => {
    movieApi();
    console.log(movies);
  }, []);
  return <div><MovieList movies={movies}/></div>;
};

export default Home;
