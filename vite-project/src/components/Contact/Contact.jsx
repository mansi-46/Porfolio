import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import linkedIn from "./linkedinIcon.jpeg";
import mail from "./mail.jpeg";
import github from "./github.jpeg";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={mail} alt="Email icon" />
          <a href="mailto:mansi.patel@dal.ca">mansi.patel@dal.ca</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedIn}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/mansi-patel-558b37219/">linkedin.com/mansi</a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github icon" />
          <a href="https://github.com/mansi-46">github.com/mansi-46</a>
        </li>
      </ul>
    </footer>
  );
};