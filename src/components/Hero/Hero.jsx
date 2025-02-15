import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Utsav Raj</h1>
        <p className={styles.description}>
          I'm a Data Analyst with a strong foundation in SQL, Python, and data
          visualization tools like Tableau, Power BI, and Google Looker. I have
          hands-on experience in analyzing data, building insights, and creating
          detailed visualizations. Feel free to reach out if you'd like to connect!
        </p>
        <div className={styles.buttons}>
          <a href="mailto:utsavr283@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            download="resume.pdf"
            className={styles.resumeBtn}
          >
            Get My Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of Utsav Raj"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
