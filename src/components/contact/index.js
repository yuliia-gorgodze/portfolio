import React, { useState } from "react";
import classNames from "classnames";
import s from "./index.module.css";

const Contact = () => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const onChange = (name, value) => {
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const onSubmit = () => {
    const isValidEmail = emailRegex.test(values?.email);
    if (isValidEmail && !!values?.name && !!values?.message) {
      console.log(values);
    }
  };

  return (
    <div className={classNames(s.container, "container")}>
      <div className={s.leftSide}>
        <h2>Let’s talk business</h2>
        <span className={s.subtitle}>
          Now that you know a lot about me, let me know if you are interested to
          work with me.
        </span>
      </div>
      <div className={s.rightSide}>
        <form className={s.form} onSubmit={onSubmit}>
          <span className={s.label}>Name</span>
          <input onChange={(e) => onChange("name", e?.target?.value)} />
          <span>Email</span>
          <input
            type="email"
            onChange={(e) => onChange("email", e?.target?.value)}
          />
          <span>Message</span>
          <input onChange={(e) => onChange("message", e?.target?.value)} />
          <button className={s.btnSubmit}>LET’S GET STARTED</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
