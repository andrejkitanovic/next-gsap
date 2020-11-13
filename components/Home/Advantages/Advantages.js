import styles from "./Advantages.module.scss";
import { useEffect, useRef } from "react";
import { TweenMax } from "gsap";

const Advantages = (props) => {
  const advantages = useRef(null);
  useEffect(() => {
    TweenMax.from(advantages.current, 0.5, {
      delay: 0.8,
      opacity: 0,
      y: 50,
    });
  }, []);
  return (
    <div className={styles.Advantages} ref={advantages}>
      <div></div>
      <div></div>
      <div></div>
      <div className={styles.video}>
        <p>BIGGEST</p>
        <p>GOTHIC</p>
        <p>SHOP</p>
      </div>
    </div>
  );
};

export default Advantages;
