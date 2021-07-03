import React from "react";
import "../styles/Contact.scss";

const Contact = (props) => {
  return (
    <section className="App__contact blue white">
      <ul className="contact__icons-list">
        <li className="contact__item">
          <a href="mailto:julia.mersing.ortiz@gmail.com" target="blank">
            <i className="far fa-envelope card-icon"></i>
          </a>
        </li>
        <li className="contact__item">
          <a href="https://linkedin.com/in/juliamersingortiz" target="blank">
            <i className="fab fa-linkedin-in linkedin-icon"></i>
          </a>
        </li>
        <li className="contact__item">
          <a href="https://github.com/JuliaMersing" target="blank">
            <i className="fab fa-github-alt github-icon"></i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
