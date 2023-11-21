import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <motion.div
      id="about"
      className="about sec-pad"
      inicial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <div className="about__content-details">
              <p className="about__content-details-para">
                Hello, my name is
                <strong> Juan Fonseca </strong>
                , and I´m a <strong> Frontend Web Developer</strong>, Currently,
                I am studying <strong> Computer Engineering </strong>
                at UDELAR, and I live in Montevideo, Uruguay.
              </p>
              <p className="about__content-details-para">
                I am a <strong> proactive and committed </strong> individual in
                every task I undertake, always striving to give my best. I am
                constantly seeking to learn new things. Feel free to{" "}
                <strong> get in touch </strong> with me by clicking here.
              </p>
            </div>
            <NavLink
              to="/contact"
              className="btn btn--med btn--theme dynamicBgClr"
            >
              {" "}
              Contact{" "}
            </NavLink>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">Bootstrap</div>
              <div className="skills__skill">React</div>
              <div className="skills__skill">NodeJS</div>
              <div className="skills__skill">Redux</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
