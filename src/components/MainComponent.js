import React, { useEffect } from "react";
import "../styles/MainComponent.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const showTitle = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

function MainComponent() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <div className="main__wrapper">
        <motion.div
          className="main__titleBox"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={showTitle}
        >
          <h1 className="main__title main__title--firstWord">SELECTED</h1>
          <h1 className="main__title main__title--stroke"> PROJECTS : </h1>
        </motion.div>
        <section className="portfolio">
          <div className="portfolio__imgContainer">
            <img
              src="../../images/portfolio-desktop.png"
              alt="portfolio website"
              className="portfolio__img"
            />
          </div>
          <div>
            <motion.h2
              className="portfolio__title"
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={showTitle}
            >
              portfolio
            </motion.h2>
          </div>
        </section>
      </div>
    </>
  );
}

export default MainComponent;
