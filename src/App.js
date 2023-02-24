import { Component, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.styles.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Fragment>
    );
  }
}

export default App;
