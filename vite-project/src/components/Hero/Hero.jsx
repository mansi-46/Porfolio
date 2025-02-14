import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import meImage from "./me.png";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mansi</h1>
        <p className={styles.description}>
        Hi, I'm Mansi Patel! I'm a Computer Science graduate with a passion for problem-solving and technology. 
        With experience in full-stack development, data analysis, and quality assurance, I thrive at the intersection of software engineering and user experience. 
        I have worked with technologies like Java, React, Spring Boot, Power BI, and Microsoft Power Platform, building scalable applications and automating workflows. 
        Beyond coding, I enjoy designing in Figma, reading, and singing. 
        Feel free to explore my projects and reach out—I'm always open to new opportunities and collaborations!
        </p>
        <a href="mailto:mansi.patel@dal.ca" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={meImage}
        alt="image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};