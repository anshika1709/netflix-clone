import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    //Asyc fxn because we cant make a hook Async function
    async function fetchData() {
      //fetchUrl will be mentioned in the array
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((movie) => {
          return <img key={movie.id} className="row_poster" src={`${baseURL}${movie.poster_path}`} alt={movie.name} />;
        })}
      </div>
    </div>
  );
}

export default Row;
