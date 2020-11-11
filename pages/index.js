import styles from "styles/Home.module.scss";

import { TweenMax, Expo } from "gsap";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    TweenMax.from("h3", 1, {
      delay:0.6,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
    });
    TweenMax.from("h1", 1, {
      delay: 0.8,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
    });
    TweenMax.from("p", 1, {
      delay: 1,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
    });
   
  }, []);

  return (
    <div className={styles.Home}>
      <h3>dark side</h3>
      <h1>DEADLIEST</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  );
}
