import styles from "./Advantages.module.scss";
import { useEffect,useRef } from "react";
import { TweenMax } from "gsap";

const Advantages = (props) => {
    const advantages = useRef(null);
  useEffect(() => {
    TweenMax.from(advantages.current, .5, {
        delay: 3,
        opacity:0,
        y:50

      });
  }, []);
  return <div className={styles.Advantages} ref={advantages}></div>;
};

export default Advantages;
