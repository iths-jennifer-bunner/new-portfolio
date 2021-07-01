import React from "react";
import "../styles/Buttons.scss";

function Buttons(props, { reference, navClick }) {
  const handleClick = () => {
    props.togglePop();
  };

  return (
    <div className="buttons">
      <div className="frame">
        <a
          href="https://www.linkedin.com/in/jenniferbunner810/"
          className="btn"
        >
          <i className="fab fa-linkedin-in" style={{ color: " #0e76a8" }}></i>
        </a>
        <a href="https://github.com/iths-jennifer-bunner" className="btn">
          <i className="fab fa-github"></i>
        </a>
        <div className="btn" ref={reference} onClick={handleClick}>
          <i className="far fa-envelope" style={{ color: " #ea4c89" }}></i>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
