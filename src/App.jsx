import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  // Generate random stars
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const numStars = 200; // Number of stars
      const starArr = [];

      for (let i = 0; i < numStars; i++) {
        const size = Math.random() * 2 + 0.5; // Random size between 0.5px and 2px
        const top = Math.random() * 100; // Random top position (in percentage)
        const left = Math.random() * 100; // Random left position (in percentage)
        const opacity = Math.random() * 0.5 + 0.3; // Random opacity for twinkling effect

        starArr.push({ size, top, left, opacity });
      }

      setStars(starArr);
    };

    generateStars();
  }, []);

  return (
    <div className={styles.App}>
      {/* Universe Effect (Stars and Planet) */}
      <div className={styles.stars}>
        {stars.map((star, index) => (
          <div
            key={index}
            className={styles.star}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
            }}
          ></div>
        ))}
      </div>

      {/* Your other components */}
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
