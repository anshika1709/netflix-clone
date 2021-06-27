import React from "react";
import Row from "./Row";
import "./App.css";
import requests from "./request";
const App = () => {
  return (
    <div>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE ARIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENT ARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default App;
