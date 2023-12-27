import React, { useState, useRef } from "react";
import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import s from "./index.module.css";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variantsTitle = {
    hidden: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 },
  };

  const variants = {
    hidden: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
  };

  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const onChange = (name, value) => {
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
    setErrors((prev) => {
      return { ...prev, [name]: false };
    });
  };

  const onSubmit = () => {
    const isValidEmail = emailRegex.test(values?.email);
    if (!isValidEmail) {
      addErrorMessage("email");
    }
    if (!values?.name) {
      addErrorMessage("name");
    }
    if (!values?.message) {
      addErrorMessage("message");
    }
    if (isValidEmail && !!values?.name && !!values?.message) {
      console.log(values);
    }
  };

  const addErrorMessage = (name) => {
    setErrors((prev) => {
      return { ...prev, [name]: true };
    });
  };

  const errorMessage = (massage, visible) => {
    return (
      <motion.span
        transition={{ type: "linear", duration: 0.5 }}
        animate={visible ? "enter" : "hidden"}
        className={s.errorMessage}
        variants={variants}
        initial="hidden"
        exit="hidden"
      >
        {massage}
      </motion.span>
    );
  };

  return (
    <div id="contact" className={classNames(s.container, "container")}>
      <div className={s.leftSide}>
        <motion.h2
          transition={{ type: "linear", duration: 1 }}
          animate={isInView ? "enter" : "hidden"}
          variants={variantsTitle}
          initial="hidden"
          exit="hidden"
          ref={ref}
        >
          Let’s talk business
        </motion.h2>
        <span className={s.subtitle}>
          Now that you know a lot about me, let me know if you are interested to
          work with me.
        </span>
      </div>
      <div className={s.rightSide}>
        <form className={s.form} onSubmit={onSubmit}>
          <span>Name *</span>
          <div className={s.field}>
            <input onChange={(e) => onChange("name", e?.target?.value)} />
            {errorMessage("Please enter name", errors?.name)}
          </div>

          <span className={s.label}>Email *</span>
          <div className={s.field}>
            <input onChange={(e) => onChange("email", e?.target?.value)} />
            {errorMessage("Please enter valid email", errors?.email)}
          </div>

          <span className={s.label}>Message *</span>
          <div className={s.field}>
            <input onChange={(e) => onChange("message", e?.target?.value)} />
            {errorMessage("Please enter message", errors?.message)}
          </div>
          <button type="button" onClick={onSubmit} className={s.btnSubmit}>
            LET’S GET STARTED
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
