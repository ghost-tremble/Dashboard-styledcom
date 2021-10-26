import React from "react";
import ReactDOM from "react-dom";
import App from "./Patrick/App";
// import App from "./Framer/src/App";
// import "./Framer/src/index.css";

let renderable = document.getElementById("root");

const Main = () => {
  return <App />;
};

ReactDOM.render(
  <>
    <Main />{" "}
  </>,
  renderable
);
