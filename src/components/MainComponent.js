import React from "react";
import "../styles/MainComponent.scss";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const Title = {
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
const showTitle = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  hidden: {
    opacity: 0,
    y: 200,
  },
};
const showSubTitle = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    y: 200,
  },
};

function MainComponent() {
  return (
    <>
      <div className="main__wrapper">
        <InView threshold={0.25} triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              className="main__titleBox"
              ref={ref}
              animate={inView ? "visible" : "hidden"}
              initial="hidden"
              variants={Title}
            >
              <h1 className="main__title main__title--firstWord">SELECTED</h1>
              <h1 className="main__title main__title--stroke"> PROJECTS : </h1>
            </motion.div>
          )}
        </InView>
        <section className="boCapital">
          <div className="main__imgContainer">
            <img
              src="../../images/bocapital.png"
              alt="portfolio website"
              className="main__img"
            />
          </div>
          <InView threshold={0.25} triggerOnce>
            {({ inView, ref }) => (
              <div className="boCapital__title">
                <motion.h2
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                  initial="hidden"
                  variants={showTitle}
                >
                  bocapital
                </motion.h2>
                <motion.h3
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                  initial="hidden"
                  variants={showSubTitle}
                >
                  vue.js | javascript | html | sass | quasar | i18n | mailchimp
                  | tawk.to
                </motion.h3>
              </div>
            )}
          </InView>
        </section>
        <section className="portfolio">
          <InView threshold={0.25} triggerOnce>
            {({ inView, ref }) => (
              <div className="portfolio__title">
                <motion.h2
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                  initial="hidden"
                  variants={showTitle}
                >
                  portfolio
                </motion.h2>
                <motion.h3
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                  initial="hidden"
                  variants={showSubTitle}
                >
                  react.js | javascript | html | sass | node
                </motion.h3>
              </div>
            )}
          </InView>
          <div className="main__imgContainer main__imgContainer--bocapital">
            <img
              src="../../images/portfolio.png"
              alt="bocapital website"
              className="main__img "
            />
          </div>
        </section>
        <section className="hamster">
          <div className="hamster__imgContainer">
            <img
              src="../../images/hamsterwars.png"
              alt="hamsterwars website"
              className="hamster__img"
            />
          </div>
          <InView threshold={0.25} triggerOnce>
            {({ inView, ref }) => (
              <motion.div className="boCapital__title">
                <motion.h2
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                  initial="hidden"
                  variants={showTitle}
                >
                  hamsterwars
                </motion.h2>
                <motion.h3
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                  initial="hidden"
                  variants={showSubTitle}
                >
                  react.js | javascript | html | css | firebase | firestore
                </motion.h3>
              </motion.div>
            )}
          </InView>
        </section>
        <section className="portfolio">
          <InView threshold={0.25} triggerOnce>
            {({ inView, ref }) => (
              <div className="portfolio__title">
                <motion.h2
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                  initial="hidden"
                  variants={showTitle}
                >
                  ukkon
                </motion.h2>
                <motion.h3
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                  initial="hidden"
                  variants={showSubTitle}
                >
                  javascript | html | css
                </motion.h3>
              </div>
            )}
          </InView>
          <div className="main__imgContainer main__imgContainer--bocapital">
            <img
              src="../../images/ukkon.png"
              alt="ukkon website"
              className="main__img "
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default MainComponent;
