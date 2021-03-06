import React, { useEffect, useState } from "react";
import "../styles/Buttons.scss";
import { motion } from "framer-motion";

function Buttons(props) {
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.innerWidth < 768) {
        const yPos = window.scrollY;
        const isScrollingUp = yPos < lastYPos;

        setShouldShowActions(isScrollingUp);
        setLastYPos(yPos);
      } else {
        setShouldShowActions(true);
      }
    }
    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  return (
    <div className="buttons">
      <motion.div
        className="frame"
        animate={{ opacity: shouldShowActions ? 1 : 0 }}
        initial={{ opacity: 0 }}
        transition={{ opacity: { duration: 0.2 } }}
      >
        <motion.a
          href="https://www.linkedin.com/in/jenniferbunner810/"
          className="btn"
          whileHover={{ scale: 1.03 }}
        >
          <i className="fab fa-linkedin-in" style={{ color: " #0e76a8" }}></i>
        </motion.a>
        <motion.a
          href="https://github.com/iths-jennifer-bunner"
          className="btn"
          whileHover={{ scale: 1.03 }}
        >
          <i className="fab fa-github"></i>
        </motion.a>
        <motion.div
          className="btn"
          whileHover={{ scale: 1.03 }}
          onClick={props.handleScrollToElement}
        >
          <i className="far fa-envelope" style={{ color: " #ea4c89" }}></i>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Buttons;
