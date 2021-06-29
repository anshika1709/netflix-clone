import React from "react";
import Row from "./Row";
import "./App.css";
import requests from "./request";
import Banner from "./Banner";

const App = () => {
  return (
    <div className="app">
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Aries" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Document Aries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default App;
