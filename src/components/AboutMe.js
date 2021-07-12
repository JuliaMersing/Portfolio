import React from "react";
import "../styles/AboutMe.scss";

const AboutMe = (props) => {
  return (
    <section id="about-me" className="Main__section_about-me">
      <div className="about-me__container">
        <p className="about-me__text">
          My name is Julia. Curious and always willing to learn, I am starting
          this new professional chapter of my proffesional life and I am very
          keen to develop myself further.
        </p>
        <p className="about-me__text">Here you can see some of my projects </p>
      </div>
    </section>
  );
};

export default AboutMe;
