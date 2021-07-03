import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

function PopUp(props) {
  const fade = {
    visible: {
      opacity: 1,
      // x: 0,
      scale: 1,
      transition: { ease: "easeOut", duration: 1 },
    },
    hidden: {
      opacity: 0,
      // x: -50,
      scale: 0.5,
    },
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n9re6t1",
        "template_a2uhk3r",
        e.target,
        "user_z1M4t2ArPi51hXWrBYzho"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  const handleClick = () => {
    props.toggle();
  };

  const [click, setClick] = useState(false);
  function messageConfirmation() {
    setClick(true);
  }

  return (
    <motion.div
      className="popUp__wrapper"
      initial="hidden"
      animate="visible"
      variants={fade}
      exit={{ y: -1000, opacity: 0, duration: 10 }}
    >
      <span className="close" onClick={handleClick}>
        &times;
      </span>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="contact-form__containers">
          <label>
            <p>Name:</p>
          </label>
          <input
            type="text"
            placeholder="First name Last Name"
            name="from_name"
          />
        </div>
        <div className="contact-form__containers">
          <label>
            <p>Email:</p>
          </label>
          <input
            type="email"
            placeholder="email@adress.com"
            name="user_email"
          />
        </div>
        <div className="contact-form__containers">
          <label>
            <p>subject:</p>
          </label>
          <input
            type="text"
            placeholder="what do you want to talk about? :) "
            name="subject"
          />
        </div>
        <div className="contact-form__containers">
          <label>
            <p>message:</p>
          </label>
          <textarea placeholder="your message here pls..." name="message" />
        </div>
        <div className="contact-form__containers" onClick={messageConfirmation}>
          <motion.input
            className="contact-form__button"
            type="submit"
            value="SEND"
            whileHover={{
              scale: 1.1,
            }}
          />
        </div>
        {click ? <p>thanx for the message!</p> : null}
      </form>
    </motion.div>
  );
}

export default PopUp;
