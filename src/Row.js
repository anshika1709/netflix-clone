import React, { useEffect, useState } from "react";
import axios from "./axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //Asyc fxn because we cant make a hook Async function
    async function fetchData() {
      //fetchUrl will be mentioned in the array
      const request = await axios.get(fetchUrl);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Row;
