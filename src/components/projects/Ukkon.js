import React, { useMemo, useContext } from "react";
import "../../styles/MainComponent.scss";
import { motion } from "framer-motion";
import { IntersectionContext } from "../../components/IntersectionObserver";

function Ukkon({
  delayOrder, // order.5 of appearance
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

  const imageRight = {
    visible: {
      opacity: 1,
      // x: 0,
      scale: 1,
      transition,
    },
    hidden: {
      opacity: 0,
      // x: 50,
      scale: 0.8,
      transition,
    },
  };
  return (
    <div className="portfolio-wrapper">
      <motion.p
        className="portfolio__text"
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
        variants={showTitle}
      >
        Case: Well this is my first final project I did after only a month in
        school. When I only knew "vanilla javascript" and before I learnt any
        frameworks.
      </motion.p>
      <section className="portfolio">
        <div className="portfolio__title">
          <motion.h2
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            variants={showTitle}
          >
            ukkon
          </motion.h2>
          <motion.h3
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            variants={showTitle}
          >
            javascript | html | css
          </motion.h3>
        </div>
        <a href="https://iths-jennifer-bunner.github.io/iths-slutprojekt-javascript/index.html">
          <motion.div
            className="main__imgContainer main__imgContainer--bocapital"
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            variants={imageRight}
          >
            <img
              src="../../images/ukkon.png"
              alt="ukkon website"
              className="main__img "
            />
          </motion.div>
        </a>
      </section>
    </div>
  );
}

export default Ukkon;
