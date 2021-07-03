import React from "react";
import "../styles/AboutMe.scss";
import Arrow from "../images/ico-arrow.svg";

const AboutMe = (props) => {
  return (
    <section id="about-me" className="Main__section_about-me">
      <div className="about-me__container">
        <p className="about-me__text">
          Saber gestionar cuentas y proyectos es importante, pero el corazón de
          una empresa radica en su producto, y eso es su construcción donde
          quiero seguir creciendo y aprendiendo.
        </p>
        <p className="about-me__text">
          ¿Quieres ver alguno de mis últimos proyectos?
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
