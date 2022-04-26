import React, { useMemo, useContext } from 'react';
import '../../styles/MainComponent.scss';
import { motion } from 'framer-motion';
import { IntersectionContext } from '../../components/IntersectionObserver';

function Portfolio({
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
      scale: 1,
      transition,
    },
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition,
    },
  };
  return (
    <div className="portfolio-wrapper">
      <motion.p
        className="portfolio__text"
        animate={inView ? 'visible' : 'hidden'}
        initial="hidden"
        variants={showTitle}
      >
        Case: My first portfolio site i did as a school project and on limited
        of time. I wanted to express me and how I like bright colors and soft
        shapes. I also wanted to only use pure javascript for all the
        transitions and animations for practice.{' '}
        <a href="https://jennifer-bunners-portfolio.netlify.app/">
          Link to website
        </a>
      </motion.p>
      <section className="portfolio">
        <div className="portfolio__title">
          <a href="https://jennifer-bunners-portfolio.netlify.app/">
            <motion.h2
              animate={inView ? 'visible' : 'hidden'}
              initial="hidden"
              variants={showTitle}
            >
              portfolio
            </motion.h2>
          </a>
          <motion.h3
            animate={inView ? 'visible' : 'hidden'}
            initial="hidden"
            variants={showTitle}
          >
            react.js | javascript | html | sass | node
          </motion.h3>
        </div>
        <a href="https://jennifer-bunners-portfolio.netlify.app/">
          <motion.div
            className="main__imgContainer main__imgContainer--bocapital"
            animate={inView ? 'visible' : 'hidden'}
            initial="hidden"
            variants={imageRight}
          >
            <motion.img
              src="../../images/portfolio.png"
              alt="portal website"
              className="main__img "
              whileHover={{ scale: 1.03 }}
            />
          </motion.div>
        </a>
      </section>
    </div>
  );
}

export default Portfolio;
