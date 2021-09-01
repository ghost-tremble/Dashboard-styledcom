import React from "react";
import ImageCard from "./imageBox";
import "./index.css";
const App = () => {
  return (
    <section className="main-container">
      <header>
        <h1>Swiper</h1>
      </header>
      <div className="container-inner">
        <ImageCard />
        <div className="buttons">
          <button className="btn">Smash</button>
          <button className="btn">Kill</button>
          <button className="btn">Marry</button>
        </div>
      </div>
    </section>
  );
};

export default App;
