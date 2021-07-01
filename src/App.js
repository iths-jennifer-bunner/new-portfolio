import React from "react";
import "./App.scss";
import Banner from "./components/Banner";
import MainComponent from "./components/MainComponent";
import About from "./components/About";
// import { IntersectionObserver } from "../src/components/IntersectionObserver";
// import {} from "framer-motion";
function App() {
  return (
    <div>
      <Banner />
      {/* <IntersectionObserver> */}
      <MainComponent />
      {/* </IntersectionObserver> */}

      <About />
    </div>
  );
}

export default App;
