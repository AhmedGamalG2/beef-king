import React from "react";
import mod from "./About.module.css";
const About = () => {
  return (
    <div className={mod.container}>
      <img className={mod.img} src="https://i.ibb.co/BG2Yf5Z/IMG-7537.jpg" />
      <h1 className={mod.name}>Ahmed Gamal</h1>
      <p className={mod.para}>
        <div>
          My name is Ahmed Gamal i'm a Front End Developer living in Cairo
        </div>
        <div className={mod.links}>
          <a href="https://github.com/AhmedGamalG2">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ahmed-gamal-a8009b265">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://ahmedgamal-portfolio.vercel.app/">Portfolio</a>
        </div>
      </p>
    </div>
  );
};

export default About;
