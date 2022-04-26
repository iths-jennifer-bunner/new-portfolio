import React, { useMemo, useContext } from 'react';
import '../../styles/MainComponent.scss';
import { motion } from 'framer-motion';
import { IntersectionContext } from '../../components/IntersectionObserver';

function MessagesApp({
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
    <div className="boCapital-wrapper">
      <section className="boCapital">
        <a href="https://my-little-message-app.herokuapp.com/">
          <motion.figure
            className="main__imgContainer"
            animate={inView ? 'visible' : 'hidden'}
            initial="hidden"
            variants={imageLeft}
          >
            <motion.img
              src="../../images/message-app.png"
              alt="Messages app website"
              className="main__img"
              whileHover={{ scale: 1.03 }}
            />
          </motion.figure>
        </a>

        <div className="boCapital__title">
          <motion.h2
            animate={inView ? 'visible' : 'hidden'}
            initial="hidden"
            variants={showTitle}
          >
            messages app
          </motion.h2>

          <motion.h3
            animate={inView ? 'visible' : 'hidden'}
            initial="hidden"
            variants={showTitle}
          >
            react.js | javascript | heroku | json-server| node.js | http
            requests
          </motion.h3>
        </div>
      </section>
      <motion.p
        className="boCapital__text"
        animate={inView ? 'visible' : 'hidden'}
        initial="hidden"
        variants={showTitle}
      >
        Case: Build a ReactJS application that communicates with a NODEJS server
        via HTTP requests.&nbsp;
        <a href="https://my-little-message-app.herokuapp.com/">
          Link to website
        </a>
      </motion.p>
    </div>
  );
}

export default MessagesApp;
