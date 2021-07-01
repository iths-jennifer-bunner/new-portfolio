import React from "react";
import "./App.scss";
import Banner from "./components/Banner";
import MainComponent from "./components/MainComponent";
import About from "./components/About";
// import Buttons from "./components/Buttons";

function App() {
  return (
    <div>
      <Banner />
      <MainComponent />
      <About />
    </div>
  );
}

export default App;
