import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import '../styles/PopUp.scss';

function PopUp(props) {
  const fade = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { ease: 'easeOut', duration: 1 },
    },
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_n9re6t1',
        'template_a2uhk3r',
        e.target,
        'user_z1M4t2ArPi51hXWrBYzho'
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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);

  let [nameClass, nameError] = nameTouched ? validateName(name) : ['', ''];
  let [emailClass, emailError] = emailTouched ? validateEmail(email) : ['', ''];
  let [messageClass, messageError] = messageTouched
    ? validateMessage(message)
    : ['', ''];

  let formIsValid =
    nameTouched &&
    emailTouched &&
    messageTouched &&
    nameError === '' &&
    emailError === '' &&
    messageError === '';

  return (
    <motion.div
      className="popUp__wrapper"
      initial="hidden"
      animate="visible"
      variants={fade}
      exit={{ y: -1000, opacity: 0, duration: 10 }}
    >
      <motion.span
        className="close"
        onClick={handleClick}
        whileHover={{
          scale: 1.5,
        }}
      >
        &times;
      </motion.span>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="contact-form__containers">
          <label>
            <p>Name:</p>
          </label>
          <input
            type="text"
            placeholder="First name Last Name"
            name="from_name"
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setNameTouched(true)}
            className={nameClass}
          />
          <div className="error">{nameError}</div>
        </div>
        <div className="contact-form__containers">
          <label>
            <p>Email:</p>
          </label>
          <input
            type="email"
            placeholder="your_email@adress.com"
            name="user_email"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailTouched(true)}
            className={emailClass}
          />
          <div className="error">{emailError}</div>
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
          <textarea
            placeholder="your message here pls..."
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => setMessageTouched(true)}
            className={messageClass}
          />
          <div className="error">{messageError}</div>
        </div>
        <div className="contact-form__containers" onClick={messageConfirmation}>
          <motion.input
            className="contact-form__button"
            disabled={!formIsValid}
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

  function validateName(name) {
    if (name.length > 0) {
      return ['valid', ''];
    } else {
      return ['invalid', `What's your name?`];
    }
  }
  function validateEmail(email) {
    if (email.length > 0) {
      return ['valid', ''];
    } else {
      return ['invalid', `Please leave your email so I can respond :) `];
    }
  }
  function validateMessage(message) {
    if (message.length > 0) {
      return ['valid', ''];
    } else {
      return ['invalid', `What's on your heart today?`];
    }
  }
}

export default PopUp;
