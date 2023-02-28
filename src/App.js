
import { Component, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/navigation.component.jsx";
import Section from "./components/section/section.component.jsx";
// import "./App.css";


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<Navigation />}>
            {/* <Route index element={<Home />} /> */}
            <Route path="/section" element={<Section />} />
          </Route>
        </Routes>
      </Fragment>
    );
  }
}

export default App;
