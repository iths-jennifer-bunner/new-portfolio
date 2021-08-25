import React, { useMemo, useContext } from "react";
import "../../styles/MainComponent.scss";
import { motion } from "framer-motion";
import { IntersectionContext } from "../../components/IntersectionObserver";

function Ankra({
  delayOrder, // order of appearance
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
        Case: A group project we did in school. We were going to create a site
        for a fictional company. We created our own theme for scratch for this
        page using custom fields and session variable as some of the features..{" "}
        <span>
          <a href="http://ankra.jakobg.se/"> Link to website</a>
        </span>
      </motion.p>
      <section className="portfolio">
        <div className="portfolio__title">
          <motion.h2
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            variants={showTitle}
          >
            ankra
          </motion.h2>

          <motion.h3
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            variants={showTitle}
          >
            wordpress | javascript | jquery | sass | php
          </motion.h3>
        </div>
        <a href="http://ankra.jakobg.se/">
          <motion.div
            className="main__imgContainer main__imgContainer--bocapital"
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            variants={imageRight}
          >
            <motion.img
              src="../../images/ankra_desktop.png"
              alt="ankra website"
              className="main__img "
              whileHover={{ scale: 1.03 }}
            />
          </motion.div>
        </a>
      </section>
    </div>
  );
}

export default Ankra;
