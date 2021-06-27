import React from "react";
import Row from "./Row";
import requests from "./request";
const App = () => {
  return (
    <div>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
    </div>
  );
};

export default App;
