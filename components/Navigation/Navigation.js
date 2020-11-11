import styles from "./Navigation.module.scss";

import { useEffect, useRef } from "react";

import { TweenMax, Expo } from "gsap";

const Navigation = (props) => {
  const logo = useRef(null);
  const links = useRef(null);

  useEffect(() => {
    TweenMax.staggerFrom([logo.current,links.current], 1, {
      delay: 2.5,
      opacity: 0,
      y: 20,
      // ease: Expo.easeInOut,
    });
    // TweenMax.from(links.current, 1, {
    //   delay: 2,
    //   opacity: 0,
    //   y: 20,
    //   // ease: Expo.easeInOut,
    // });
  }, []);

  return (
    <div className={styles.Navigation}>
      <div className={styles.logo} ref={logo}>
        dead<span>ly.</span>
      </div>

      <div className={styles.links} ref={links}>
        <a className={styles.active}>Home</a>
        <a>Gallery</a>
        <a>Shop</a>
        <a>Reviews</a>
        <a>About</a>
      </div>

      <div className={styles.profile}></div>
    </div>
  );
};

export default Navigation;
