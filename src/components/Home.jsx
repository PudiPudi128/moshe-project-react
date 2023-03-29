import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const movieApi = async function () {
    let { data } = await axios.get(
      `http://www.omdbapi.com/?s=bank&apikey=55a6d6bc`
    );
    setMovies(data.Search);
    console.log(movies);
  };
  useEffect(() => {
    movieApi();
  }, []);
  return (
    <div>
      <button>click</button>
    </div>
  );
};

export default Home;
