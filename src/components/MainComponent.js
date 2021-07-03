import React, { useMemo, useContext } from "react";
import "../styles/MainComponent.scss";
import { motion } from "framer-motion";
import {
  IntersectionObserver,
  IntersectionContext,
} from "../components/IntersectionObserver";
import BoCapital from "./projects/BoCapital";
import Portfolio from "./projects/Portfolio";
import HamsterWars from "./projects/HamsterWars";
import Ukkon from "./projects/Ukkon";

function MainComponent({
  delayOrder,
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
  const Title = {
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
    hidden: {
      y: 100,
      opacity: 0,
      transition,
    },
  };

  return (
    <>
      <div className="main__wrapper">
        <IntersectionObserver>
          <motion.div
            className="main__titleBox"
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            variants={Title}
          >
            <h1 className="main__title main__title--firstWord">SELECTED</h1>
            <h1 className="main__title main__title--stroke">PROJECTS :</h1>
          </motion.div>
        </IntersectionObserver>
        <IntersectionObserver>
          <BoCapital />
        </IntersectionObserver>
        <IntersectionObserver>
          <Portfolio />
        </IntersectionObserver>
        <IntersectionObserver>
          <HamsterWars />
        </IntersectionObserver>
        <IntersectionObserver>
          <Ukkon />
        </IntersectionObserver>
      </div>
    </>
  );
}

export default MainComponent;
