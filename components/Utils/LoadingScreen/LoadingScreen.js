import { useEffect, useRef } from "react";
import styles from "./LoadingScreen.module.scss";

import { TweenMax, Expo } from "gsap";

const LoadingScreen = (props) => {
  const a = useRef(null);
  const b = useRef(null);
  const c = useRef(null);
  const d = useRef(null);

  useEffect(() => {
    // const tl = new TimelineMax();

    TweenMax.staggerTo([a.current, b.current, c.current, d.current], 1, {
      x: -1920,
      opacity:0,
      ease: Expo.easeInOut,
      stagger: {
        amount: 0.4,
      },
    });
  });

  return (
    <div className={styles.LoadingScreen}>
      <div className={styles.a} ref={a} />
      <div className={styles.b} ref={b} />
      <div className={styles.c} ref={c} />
      <div className={styles.d} ref={d} />
    </div>
  );
};

export default LoadingScreen;
