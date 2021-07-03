import React, { useMemo, useContext } from "react";
import "../../styles/MainComponent.scss";
import { motion } from "framer-motion";
import { IntersectionContext } from "../../components/IntersectionObserver";

function Portfolio({
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
      scale: 0.5,
      transition,
    },
  };
  return (
    <div className="portfolio-wrapper">
      <p className="portfolio__text">
        Case: My first portfolio site i did as a school project. I wanted to
        express me and how I like bright colors and soft shapes. I also wanted
        to only use pure javascript for all the transitions and animations for
        practice.
      </p>
      <section className="portfolio">
        <div className="portfolio__title">
          <motion.h2
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            variants={showTitle}
          >
            portfolio
          </motion.h2>
          <motion.h3
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            variants={showTitle}
          >
            react.js | javascript | html | sass | node
          </motion.h3>
        </div>
        <a href="https://jennifer-bunners-portfolio.netlify.app/">
          <motion.div
            className="main__imgContainer main__imgContainer--bocapital"
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            variants={imageRight}
          >
            <img
              src="../../images/portfolio.png"
              alt="portal website"
              className="main__img "
            />
          </motion.div>
        </a>
      </section>
    </div>
  );
}

export default Portfolio;
