import React, { useState, useMemo, useContext } from "react";
import "../styles/About.scss";
import PopUp from "../components/PopUp";
import { motion, AnimatePresence } from "framer-motion";
import { IntersectionContext } from "../components/IntersectionObserver";

function About({
  myRef,
  delayOrder,
  duration = 1.5,
  easing = [0.42, 0, 0.58, 1],
}) {
  const { inView } = useContext(IntersectionContext);
  const transition = useMemo(
    () => ({
      duration,
      delay: delayOrder / 5,
      ease: easing,
    }),
    [delayOrder, easing, duration]
  );

  const showText = {
    visible: {
      opacity: 1,
      scale: 1,
      transition,
    },
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition,
    },
  };
  const showSayHi = {
    visible: {
      opacity: 1,
      y: 0,
      transition,
    },
    hidden: {
      opacity: 0,
      y: 200,
      transition,
    },
  };

  const [seen, setSeen] = useState(false);
  function togglePop() {
    setSeen(true);
  }

  return (
    <div className="about__wrapper">
      <motion.div
        className="about__textContainer"
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
        variants={showText}
      >
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
      </motion.div>
      <motion.div
        className="about__titleBox"
        ref={myRef}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
        variants={showSayHi}
      >
        <h1 className="about__title main__title--firstWord">say</h1>
        <h1 className="about__title about__title--stroke">hi.</h1>
        <motion.p className="about__bubble" onClick={togglePop}>
          Hi, Friends 💖 Pop this bubble to message me!
        </motion.p>
      </motion.div>
      <AnimatePresence>
        {seen ? <PopUp toggle={setSeen} /> : false}
      </AnimatePresence>
    </div>
  );
}

export default About;
