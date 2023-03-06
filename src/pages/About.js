import React from "react";
import mod from "./About.module.css";
const About = () => {
  return (
    <div className={mod.container}>
      <img className={mod.img} src="https://i.ibb.co/BG2Yf5Z/IMG-7537.jpg" />
      <h1 className={mod.name}>Ahmed Gamal</h1>
      <p className={mod.para}>
        My name is Ahmed Gamal i'm a Front End Developer living in Cairo
      </p>
    </div>
  );
};

export default About;
