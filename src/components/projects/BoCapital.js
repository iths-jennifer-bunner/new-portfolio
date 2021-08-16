import React, { useMemo, useContext } from "react";
import "../../styles/MainComponent.scss";
import { motion } from "framer-motion";
import { IntersectionContext } from "../../components/IntersectionObserver";

function BoCapital({
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
      scale: 0.8,
      transition,
    },
  };
  return (
    <div className="boCapital-wrapper">
      <section className="boCapital">
        <a href="https://bocapital.se/">
          <motion.figure
            className="main__imgContainer"
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            variants={imageLeft}
          >
            <img
              src="../../images/bocapital.png"
              alt="boCapital website"
              className="main__img"
            />
          </motion.figure>
        </a>

        <div className="boCapital__title">
          <motion.h2
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            variants={showTitle}
          >
            bocapital
          </motion.h2>

          <motion.h3
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            variants={showTitle}
          >
            vue.js | javascript | html | sass | quasar | i18n | mailchimp |
            tawk.to
          </motion.h3>
        </div>
      </section>
      <motion.p
        className="boCapital__text"
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
        variants={showTitle}
      >
        Case: At my first internship they needed a marketing site for the
        product that they are developing and I was given full responsibility to
        build the design. From designing it in Figma to deploy it.
        <span>
          <a href="https://bocapital.se/"> Link to website</a>
        </span>
      </motion.p>
    </div>
  );
}

export default BoCapital;
