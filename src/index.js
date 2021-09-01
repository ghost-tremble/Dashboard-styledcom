import React from "react";
import ReactDOM from "react-dom";

import App from "./Styledcomponents/App";
//import { AppProvider } from "./Revision/Contexts/Context";

let renderable = document.getElementById("root");

const Main = () => {
    return ( <
        React.StrictMode >
        <
        App / >
        <
        /React.StrictMode>
    );
};

ReactDOM.render( < Main / > , renderable);