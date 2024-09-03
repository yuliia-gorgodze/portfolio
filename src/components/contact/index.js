import React, { useState, useRef } from "react";
import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import sendToTg from "../../api/index";
import { ThreeDots } from "react-loader-spinner";
import s from "./index.module.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorsTg, setErrorsTg] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { t } = useTranslation();

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

  const addErrorMessage = (name) => {
    setErrors((prev) => {
      return { ...prev, [name]: true };
    });
  };

  const onSubmit = async () => {
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
      setLoading(true);
      try {
        const resp = await sendToTg({
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: values,
        });
        if (resp.status !== 200) {
          throw resp;
        } else {
          setLoading(false);
          setValues({ name: "", email: "", message: "" });
          setSuccess(true);
        }
      } catch (err) {
        console.error(err);
        setLoading(false);
        setValues({ name: "", email: "", message: "" });
        setErrorsTg(true);
      }
    }
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
          {t("contact.title")}
        </motion.h2>
        <span className={s.subtitle}>{t("contact.subTitle")}</span>
      </div>
      <div className={s.rightSide}>
        <form className={s.form} onSubmit={onSubmit}>
          <span> {t("contact.form.name")}</span>
          <div className={s.field}>
            <input
              value={values?.name}
              onChange={(e) => onChange("name", e?.target?.value)}
            />
            {errorMessage(t("contact.errors.nameRequired"), errors?.name)}
          </div>

          <span className={s.label}> {t("contact.form.email")}</span>
          <div className={s.field}>
            <input
              value={values?.email}
              onChange={(e) => onChange("email", e?.target?.value)}
            />
            {errorMessage(t("contact.errors.emailNotValid"), errors?.email)}
          </div>

          <span className={s.label}> {t("contact.form.message")}</span>
          <div className={s.field}>
            <input
              value={values?.message}
              onChange={(e) => onChange("message", e?.target?.value)}
            />
            {errorMessage(t("contact.errors.messageRequired"), errors?.message)}
          </div>
          <button type="button" onClick={onSubmit} className={s.btnSubmit}>
            {t("contact.form.btnText")}
          </button>
        </form>
        {loading && (
          <div className={s.preloader}>
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#5221e6"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
        {success && (
          <div className={s.preloader}>
            <span className={s.successText}>{t("contact.success")}</span>
            <button
              type="button"
              onClick={() => setSuccess(false)}
              className={s.btnResend}
            >
              {t("contact.resend")}
            </button>
          </div>
        )}
        {errorsTg && (
          <div className={s.preloader}>
            <span className={s.successText}>{t("contact.error")}</span>
            <button
              type="button"
              onClick={() => setErrorsTg(false)}
              className={s.btnResend}
            >
              {t("contact.resend")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
