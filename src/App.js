
import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/navigation.component.jsx";
import Section from "./components/section/section.component.jsx";
import Home from "./routes/Home/home.component.jsx";


class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/section" element={<Section />} />
        </Routes>
      </Fragment>
    );
  }
}

export default App;
