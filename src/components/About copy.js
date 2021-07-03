import React, { useState } from "react";
import "../styles/About.scss";
import PopUp from "../components/PopUp";
import { motion, AnimatePresence } from "framer-motion";

function About({ myRef }) {
  const [seen, setSeen] = useState(false);
  function togglePop() {
    setSeen(true);
  }

  return (
    <div className="about__wrapper">
      <div className="about__textContainer">
        <h4 className="about__text">
          Hi, I am Jennifer Bunner and I live in Stockholm. I recently graduated
          from the frontend development at IT-högskolan and Im currently looking
          for a full-time job as a frontend developer.
        </h4>
        <div className="about__imageContainer">
          <img
            className="about__image"
            alt="selfie of me"
            src="../../images/portfolio-profile.jpg"
          />
        </div>
      </div>
      <div className="about__titleBox" ref={myRef}>
        <h1 className="about__title main__title--firstWord">say</h1>
        <h1 className="about__title about__title--stroke">hi.</h1>
        <motion.p className="about__bubble" onClick={togglePop}>
          Hi, Friends 💖 Pop this bubble to message me!
        </motion.p>
      </div>
      <AnimatePresence>
        {seen ? <PopUp toggle={setSeen} /> : false}
      </AnimatePresence>
    </div>
  );
}

export default About;
