import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "flowbite-react";

const Info = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const { idMovie } = useParams();

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
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <Card className=" "
          horizontal={true}
          imgSrc={dataMovie.Poster}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {dataMovie.Title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          {dataMovie.Plot}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Info;
