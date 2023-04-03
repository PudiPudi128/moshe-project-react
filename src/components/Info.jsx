import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "flowbite-react";

const Info = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const { idMovie } = useParams();
  const navigate = useNavigate();

  const movieApi = async () => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${idMovie}&apikey=55a6d6bc`
    );
    console.log("dataInfo=", data);
    setDataMovie(data);
  };

  useEffect(() => {
    movieApi();
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={dataMovie.Poster}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{dataMovie.Title}</h1>
          <p className="py-6">{dataMovie.Plot}</p>
          <button onClick={() => navigate(-1)} className="btn btn-primary">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
