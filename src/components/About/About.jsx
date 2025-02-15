import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Utsav Raj with data visualization tools"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
                I specialize in analyzing and interpreting complex data to drive business decisions. My experience includes using tools like SQL, Python, and data visualization tools like Tableau and Power BI.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Visualization</h3>
              <p>
                I am skilled at creating interactive dashboards and reports that help visualize complex datasets, aiding decision-making across various industries.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Data-Driven Insights</h3>
              <p>
                I use data to derive actionable insights, helping businesses improve performance through EDA, statistical analysis, and predictive modeling.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
