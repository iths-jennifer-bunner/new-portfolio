import React, { useMemo, useContext } from 'react';
import '../styles/MainComponent.scss';
import { motion } from 'framer-motion';
import {
  IntersectionObserver,
  IntersectionContext,
} from '../components/IntersectionObserver';
import BoCapital from './projects/BoCapital';
import Portfolio from './projects/Portfolio';
import HamsterWars from './projects/HamsterWars';
import Ukkon from './projects/Ukkon';
import Ankra from './projects/Ankra';
import MessagesApp from './projects/MessageApp';

function MainComponent({
  delayOrder,
  duration = 2,
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
      y: 200,
      opacity: 0,
      transition,
    },
  };

  return (
    <>
      <div className="main__wrapper">
        <div className="main__titleBox">
          <IntersectionObserver>
            <motion.h1
              className="main__title main__title--firstWord"
              animate={inView ? 'visible' : 'hidden'}
              initial="hidden"
              variants={Title}
            >
              SELECTED
            </motion.h1>
          </IntersectionObserver>
          <IntersectionObserver>
            <motion.h1
              className="main__title main__title--stroke"
              animate={inView ? 'visible' : 'hidden'}
              initial="hidden"
              variants={Title}
            >
              PROJECTS :
            </motion.h1>
          </IntersectionObserver>
        </div>
        <IntersectionObserver>
          <motion.h3
            animate={inView ? 'visible' : 'hidden'}
            initial="hidden"
            variants={Title}
            className="main__subtitle"
          >
            if you are curious to see the website "live", click on the image ;)
          </motion.h3>
        </IntersectionObserver>
        <div className="componentsWrapper">
          <IntersectionObserver>
            <MessagesApp />
          </IntersectionObserver>
          <IntersectionObserver>
            <Ankra />
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
      </div>
    </>
  );
}

export default MainComponent;
