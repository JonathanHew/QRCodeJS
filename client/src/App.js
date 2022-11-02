import React, { Fragment } from "react";
import "./App.css";

import InputURL from "./components/InputURL";
import DisplayURLs from "./components/DisplayURLs";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputURL></InputURL>
        <DisplayURLs></DisplayURLs>
      </div>
    </Fragment>
  );
}

export default App;
