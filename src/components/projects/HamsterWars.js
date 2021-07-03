import React, { useMemo, useContext } from "react";
import "../../styles/MainComponent.scss";
import { motion } from "framer-motion";
import { IntersectionContext } from "../../components/IntersectionObserver";

function HamsterWars({
  delayOrder, // order of appearance
  duration = 1,
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
  const showTitle = {
    visible: {
      opacity: 1,
      y: 0,
      transition,
    },
    hidden: {
      opacity: 0,
      y: 100,
      transition,
    },
  };

  const imageLeft = {
    visible: {
      opacity: 1,
      // x: 0,
      scale: 1,
      transition,
    },
    hidden: {
      opacity: 0,
      // x: -50,
      scale: 0.5,
      transition,
    },
  };
  return (
    <div className="boCapital-wrapper">
      <section className="hamster">
        <a href="http://fab-hamster-wars.herokuapp.com/">
          <motion.div
            className="hamster__imgContainer"
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            variants={imageLeft}
          >
            <img
              src="../../images/hamsterwars.png"
              alt="hamsterwars website"
              className="hamster__img"
            />
          </motion.div>
        </a>
        <motion.div className="boCapital__title">
          <motion.h2
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            variants={showTitle}
          >
            hamsterwars
          </motion.h2>
          <motion.h3
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            variants={showTitle}
          >
            react.js | javascript | html | css | firebase | firestore
          </motion.h3>
        </motion.div>
      </section>
      <p className="boCapital__text">
        Case: My first "fullstack" project. Its a game where you can vote on
        cutest hamsters, see top & bottom 5 hamsters, and form where you can add
        your own hamsters. I made my own api for the hamsters thats stored in
        Firebase/Firestore.
      </p>
    </div>
  );
}

export default HamsterWars;
