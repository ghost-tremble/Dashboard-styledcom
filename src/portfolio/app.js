import React from "react";
import "./index.css";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Navbar from "./navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <section>
      <Router>
        <Route>
          <Navbar />
        </Route>

        <Switch>
          <Route path="/Page1">
            <Page1 />
          </Route>
          <Route path="/Page2">
            <Page2 />
          </Route>
          <Route path="/Page3">
            <Page3 />
          </Route>
          <Route path="/Page4">
            <Page4 />
          </Route>
        </Switch>
      </Router>
    </section>
  );
};

export default App;
