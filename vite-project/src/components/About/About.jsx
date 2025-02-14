import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import halifaxImage from "./halifax.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={halifaxImage}
          alt="My photography skills"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>A Path of Curiosity</h3>
              <p>
              From a curious problem-solver to a Computer Science graduate, my journey has been fueled by a passion for technology. 
              I’ve explored full-stack development, data analysis, and quality assurance through internships, projects, and hackathons. Each experience has strengthened my ability to build scalable applications and automate workflows.
            I thrive on challenges that push me to learn and grow.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Building with Purpose</h3>
              <p>
              Beyond coding, I love collaborating with teams, brainstorming creative solutions, and ensuring that technology serves people effectively. 
              My experience in leadership roles and customer-facing jobs has strengthened my communication and adaptability. 
              I take pride in writing clean, maintainable code and ensuring every project delivers real value.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Beyond Tech</h3>
              <p>
              Outside of tech, I find joy in storytelling—whether through music, design, or conversation. 
              I love reading, cooking, and traveling, as each brings fresh perspectives and inspiration. 
              I believe the best ideas come from diverse experiences, and I’m always eager to connect, share, and learn from others.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};