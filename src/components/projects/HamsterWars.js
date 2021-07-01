import React, { useMemo, useContext } from "react";
import "../../styles/MainComponent.scss";
import { motion } from "framer-motion";
import { IntersectionContext } from "../../components/IntersectionObserver";

function HamsterWars({
  delayOrder, // order of appearance
  duration = 1,
  easing = [0.42, 0, 0.58, 1], // [number, number, number, number] | "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | EasingFunction;
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
      y: 50,
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
    <div>
      <section className="hamster">
        <motion.div
          className="hamster__imgContainer"
          // ref={ref}
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
        <motion.div className="boCapital__title">
          <motion.h2
            // ref={ref}
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
            {/* {inView} */}
            react.js | javascript | html | css | firebase | firestore
          </motion.h3>
        </motion.div>
      </section>
    </div>
  );
}

export default HamsterWars;
